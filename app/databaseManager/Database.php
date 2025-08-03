<?php

namespace App\DatabaseManager;

use App\Connection\Connection;
use PDO;

class Database
{
  private string $tabela;

  private PDO $conexao;

  public function __construct(string $tabela)
  {
    $this->tabela = $tabela;
    $this->conexao = Connection::getInstance();
  }

  public function mountToQuery(array $data): array
  {
    /**
     * Pego as chaves do array
     */
    $colunas = array_keys(($data));
    $placeholders = array_map(fn($col) => ':' . $col, $colunas);

    $sql = "INSERT INTO {$this->tabela} (" . implode(', ', $colunas) . ") VALUES (" . implode(', ', $placeholders) . ")";
    return [$sql, $data];
  }

  public function add(array $data): int
  {
    [$sql, $params] = $this->mountToQuery(($data));

    $stmt = $this->conexao->prepare($sql);
    $stmt->execute($params);

    return (int) $this->conexao->lastInsertId();
  }
  public function get(): array
  {
    $sql = $this->conexao->prepare("SELECT * FROM {$this->tabela}");
    $sql->execute();
    $response = $sql->fetchAll(PDO::FETCH_ASSOC);
    return $response;
  }

  public function selectWithJoin(array $options): array
  {
    $columns = $options['columns'] ?? ['*'];
    $joins = $options['joins'] ?? [];
    $where = $options['where'] ?? [];
    $alias = $options['alias'] ?? 'main';

    $sql = 'SELECT ' . implode(', ', $columns) . " FROM {$this->tabela} AS $alias";

    foreach ($joins as $join) {
      $type = strtoupper($join['type'] ?? 'INNER');
      $table = $join['table'];
      $aliasJoin = $join['alias'];
      $on = $join['on'];
      $sql .= " $type JOIN $table AS $aliasJoin ON $on";
    }

    $params = [];
    if (!empty($where)) {
      $conditions = [];
      foreach ($where as $column => $value) {
        $paramKey = str_replace(['.', '-'], '_', $column);
        $conditions[] = "$column = :$paramKey";
        $params[$paramKey] = $value;
      }
      $sql .= ' WHERE ' . implode(' AND ', $conditions);
    }

    $stmt = $this->conexao->prepare($sql);
    $stmt->execute($params);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getById(int $id, string $coluna): int
  {
    $sql = $this->conexao->prepare("SELECT * FROM {$this->tabela} WHERE {$coluna} = :id ");
    $sql->execute([":id" => $id, PDO::PARAM_INT]);

    $results = $sql->rowCount();
    return $results;
  }
  public function update(int $id) {}
  public function delete(int $id) {}
}
