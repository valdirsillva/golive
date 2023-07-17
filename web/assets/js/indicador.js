"use strict"


var DATA = { }; // iniciando o objeto literal vazio

const buttonClick = getFirstSelector('[type="submit"]');

const URL = 'http://localhost/golive/services/index.php';

const searchIndicator = getFirstSelector('#botao__pesquisar_indicador');

const edit_indicator = getFirstSelector("#editar__indicador");

/**
 * @selector retorna o primeiro selector encontrado no DOM
 * 
 */ 
function getFirstSelector(element) {
  return document.querySelector(element);
}

window.addEventListener("load",  () => {
    let allInputs = document.querySelectorAll('.data-js');

    allInputs.forEach(function(currentInput) {
       // currentInput evento p/ ouvir e mudança nos inputs
       currentInput.addEventListener("change", (input) => {
          fillData(input); // desenha o grafico e adiciona os dados
       })
    })
})

edit_indicator.addEventListener("click", () => { listIndicator(); })


buttonClick.addEventListener("click", async () => {
    event.preventDefault();

    let user = getFirstSelector('[name="project_id"]');
    var name_user = user.name;
              
    // guardando chave e valor no objeto literal
    DATA[name_user] = user.value;
    DATA['action'] = 'add'; // tipo de método 

    console.log(DATA);

    const res = await fetch(URL, {
       method: "post",
       headers: {

         'Content-Type': 'application/json;charset=utf-8'
       },

       body: JSON.stringify(DATA)
     });
             
     messageToastr(res);
})

function messageToastr(res) {
  if (res.status === 201) {
      toastr.success('Indicador cadastrado com sucesso !');

      document.querySelectorAll('.data-js').forEach(function(currentInput) {
          currentInput.value = '';
      })

  } else {
      toastr.error('Houve um erro ao tentar salvar os dados');
  }
}

searchIndicator.onclick =  async function(e) {

    let inputValue =  getFirstSelector('#indicator').value;
             
    let data = await fetch(`http://localhost/golive/services/services/indicator.php?indicator=${inputValue}`);

    let results = await data.json();

    edit(results[0]);
    results[0]['edit'] = '_edit';
    fillEdit(results[0]);
}

async function listIndicator() {
  let data = await fetch('http://localhost/golive/services/services/list_indicators.php');
  let namesIndicators = await data.json();

  namesIndicators.map(indicator => {
      select(indicator);
  })
}

function select(indicator) {
  let option = document.createElement('option');

  option.value = indicator.indicator;
  option.textContent = indicator.indicator;
  option.setAttribute('style', 'text-transform: uppercase');

  getFirstSelector('[name="indicator"]').appendChild(option);
}


function fillData(input) {
  let name =  input.target.name;
  let value = input.target.value;

  // DATA[chave_do_objeto] = value; => valor
  DATA[name] = value;

    Highcharts.chart(`preview`, {
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          text: DATA.indicator_name
        },

        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [{
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, '#FFF'],
                [1, '#333']
              ]
            },
            borderWidth: 0,
            outerRadius: '100%'
          }, {
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, '#333'],
                [1, '#FFF']
              ]
            },
            borderWidth: 1,
            outerRadius: '107%'
          }, {

          // default background
          }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },
            

        // the value axis
        yAxis: {
          min:  0, // pos inicial do ponteiro
          max: DATA.position_max, // pos final do ponteiro

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
               step:3,
               rotation: 'auto'
            },
            title: {
                text: DATA.indicador_name
            },
            plotBands: [{

              from: DATA.fourth_scale_x,
              to: DATA.fourth_scale_y,
              color: DATA.fourth_color
            },
            {
              from: DATA.third_scale_x,
              to:  DATA.third_scale_y,
              color: DATA.third_color
                 
            }, {

              from: DATA.second_scale_x,
              to: DATA.second_scale_y,
              color: DATA.second_color

            }, {
                from: DATA.first_scale_x,
                to: DATA.first_scale_y,
                color: DATA.first_color
              }]
            },

            series: [{
              name: DATA.indicator_name,
              data: [0],
              tooltip:{
                valueSuffix:'%'
              }
            }]
              
    }, );   
}

function fillEdit(fetch) {

    Highcharts.chart(`preview${fetch['edit']}`, {
     chart: {
       type: 'gauge',
       plotBackgroundColor: null,
       plotBackgroundImage: null,
       plotBorderWidth: 0,
       plotShadow: false
     },

     title: {
       text: fetch.indicator_name
     },

      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '100%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {

         // default background
       }, {
         backgroundColor: '#DDD',
         borderWidth: 0,
         outerRadius: '105%',
         innerRadius: '103%'
       }]
      },
            
      // the value axis
      yAxis: {
        min:  0, // pos inicial do ponteiro
        max: fetch.position_max, // pos final do ponteiro

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step:3,
          rotation: 'auto'
        },
        title: {
          text: fetch.indicador_name
        },
        plotBands: [
          {
          from: fetch.fourth_scale_x,
          to: fetch.fourth_scale_y,
          color: fetch.fourth_color
                  
         },
         {
           from: fetch.third_scale_x,
           to:  fetch.third_scale_y,
           color: fetch.third_color
                 
         }, {
            from: fetch.second_scale_x,
            to: fetch.second_scale_y,
            color: fetch.second_color

          }, {
            from: fetch.first_scale_x,
            to: fetch.first_scale_y,
            color: fetch.first_color  
          }
          ]
        },

        series: [{
          name: fetch.indicator_name,
          data: [0],
          tooltip:{
            valueSuffix:'%'
          }
        }] },
    );   
}

function edit(data) {


      // console.log(data.);
 
      let element = `<form action="" method="POST" id="form_edit" onsubmit="handleEdit(event)">
                 <div class="form-row">
                   <div class="form-group col-md-4">
                     <label for="indicador">Indicador</label>
                     <input type="hidden" name="indicator_id" value="${data.id}">

                     <input type="text" class="form-control data-js" name="indicator_name" id="indicador" style="text-transform: uppercase;"
                     value="${data.indicator}" >
                   </div>
                   <div class="form-group col-md-2">
                     <label for="inputPassword4">Subprojeto</label>
                       <select name="subproject_id" class="form-control data-js">
                         <option value='1' ${data.project_sub_id == 1 ? 'selected' : '' }  >ILHA TELEVENDAS [ativo]</option>
                         <option value='2' ${data.project_sub_id == 2 ? 'selected' : '' } >ILHA TELEVENDAS [receptivo]</option>
                       </select>
                   </div>
                 </div>

                <div class="form-row">
                    <div class="form-group col-md-2">
                      <label for="inputPassword4">Valor mínimo</label>
                      <input type="text" class="form-control data-js" name="position_min" value="${data.position_min}">
                    </div> 

                    <div class="form-group col-md-2">
                      <label for="inputPassword4">Valor máximo</label>
                      <input type="text" class="form-control data-js" name="position_max" value="${data.position_max}">
                    </div>

                    <div class="form-group col-md-2">
                      <label for="inputPassword4">Status</label>
                      <select name="indicator_status" class="form-control data-js">
                         <option>* </option>

                         <option value="ativo">Ativo</option>
                         <option value="inativo">Inativo</option>
                      </select>
                    </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="pos_x">De</label>
                    <input type="text" class="form-control data-js" name="first_scale_x" id="pos_x" value="${data.first_scale_x}">
                  </div>

                  <div class="form-group col-md-2">
                    <label for="pos_y">Até</label>
                    <input type="text" class="form-control data-js" name="first_scale_y" id="pos_y" value="${data.first_scale_y}">
                  </div>

                  <div class="form-group col-md-1">
                    <label for="inputPassword4">Cor</label>
                    <input type="color" class="form-control data-js" name="first_color" id="inputPassword4" value="${data.first_color}" >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">De</label>
                    <input type="text" class="form-control data-js" name="second_scale_x" min="0" id="inputPassword4" value="${data.second_scale_x}">
                  </div>

                  <div class="form-group col-md-2">
                    <label for="inputPassword4">Até</label>
                    <input type="text" class="form-control data-js" name="second_scale_y" id="inputPassword4" value="${data.second_scale_y}">
                  </div>

                  <div class="form-group col-md-1">
                    <label for="inputPassword4">Cor</label>
                    <input type="color" class="form-control data-js" name="second_color" id="inputPassword4" value="${data.second_color}">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">De</label>
                    <input type="text" class="form-control data-js" name="third_scale_x" id="inputPassword4" value="${data.third_scale_x}">
                  </div>

                  <div class="form-group col-md-2">
                    <label for="inputPassword4">Até</label>
                    <input type="text" class="form-control data-js" name="third_scale_y" id="inputPassword4" value="${data.third_scale_y}">
                  </div>

                  <div class="form-group col-md-1">
                    <label for="inputPassword4">Cor</label>
                    <input type="color" class="form-control data-js" name="third_color" id="inputPassword4" value="${data.third_color}">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputPassword4">De</label>
                    <input type="text" class="form-control data-js" name="fourth_scale_x" id="inputPassword4" value="${data.fourth_scale_x}">
                  </div>

                  <div class="form-group col-md-2">
                    <label for="inputPassword4">Até</label>
                    <input type="text" class="form-control data-js" name="fourth_scale_y" id="inputPassword4" value="${data.fourth_scale_y}">
                  </div>

                  <div class="form-group col-md-1">
                    <label for="inputPassword4">Cor</label>
                    <input type="color" class="form-control data-js" name="fourth_color" id="inputPassword4" value="${data.fourth_color}">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group flex">
                      <input type="submit" name="editar" id="editar_" class="btn  btn-primary btn-lg" value="Salvar" >
                  </div>
              </div>`;

            document.querySelector("#dataItem").innerHTML = element;
}




function handleEdit(event) {

    event.preventDefault();

    var MAX_INPUTS = 17;

    for(let input = 0; input <= MAX_INPUTS; input++) {

       let value = event.target[input].value;
       let name = event.target[input].name;

       DATA[name] = value;
    }

    // guardando chave e valor no objeto literal
    DATA['action'] = 'edit'; // tipo de método 

    fetch(URL, {
      method: "post",
      body: JSON.stringify(DATA),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then((response) => { toastr.success('Indicador editado com sucesso') })
    .catch(err => console.log(err) ) 
}     