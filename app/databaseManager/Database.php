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
  public function get() {}
  public function getById(int $id) {}
  public function update(int $id) {}
  public function delete(int $id) {}
}
