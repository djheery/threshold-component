const THRESHOLD_COMPONENT = (() => {
  const id = UUID_Generator.get_id();
  const state = TAX_THRESHOLD_STATE;
  let heading_container, heading, tax_type, tax_location,
      thresh_table_container, tax_thresholds, DOM_container,
      tax_year, select_container

    const add_id_to_container = () => {
      if(DOM_container.getAttribute('id') !== null)
        console.error('There should not be an ID on a Threshold Component');
      
      DOM_container.setAttribute('id', id);
    } 

    const get_thresholds = () => {
      tax_thresholds = state.get_specific_threshold(tax_location, tax_type)
    }

    const change_tax_year = (e) => {
      const new_tax_year = e.target.selected;
      tax_year = new_tax_year;
      populate_thresholds();
    }
    
    const find_populated_tax_year = () => {
      let max_iterations = 10;
      while(tax_thresholds[tax_year] == undefined) {
        tax_year = tax_year - 1;
        max_iterations--;
        if(max_iterations == 0)
          break;
      }

      console.log(tax_year);
       // If undefined after search revert to initial year;
      if(tax_thresholds[tax_year] == undefined) 
        tax_year = 2022;
      
      write_to_heading();
    }

    const populate_thresholds = () => {
      if(tax_thresholds[tax_year] == undefined) 
        find_populated_tax_year();

      const thresholds_to_display = tax_thresholds[tax_year];
      thresh_table_container.innerHTML = '';
      add_headers(thresh_table_container);
      let thresholds_length = Object.keys(thresholds_to_display).length;
      let [object_keys_encode, threshold_number] = 
              get_key_map(tax_thresholds[tax_year], thresholds_length);
      
      const tbody = document.createElement('tbody');
      for(let i = 0; i < threshold_number; i++) {
        let tr = document.createElement('tr');
        for(let j = 0; j < thresholds_length; j++) {
          let td = document.createElement('td');
          let data = object_keys_encode[j][`threshold_${i + 1}`];
          if(data == undefined) 
            data = `${object_keys_encode[j][`rate_${i + 1}`]}%`;
          else 
            data = `$${formatNumbers(data)}`  
          td.innerHTML += `${data}`
          tr.append(td);
        }
        tbody.append(tr);
      }

      thresh_table_container.append(tbody);
    }

    const formatNumbers = (x) => {
      x = parseFloat(x);
     let newNum = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     return newNum;
    }

    const get_key_map = (thresholds, thresholds_length) => {
      const map = {}
      let number = 0;
      for(const key in thresholds) {

        map[number] = thresholds[key];
        number++
      }
      const amount_of_thresholds = Object.keys(map[0]).length;
      return [map, amount_of_thresholds];
    }
    

    const add_headers = () => {
      const headers = tax_thresholds['headers'];
      const tableHead = document.createElement('thead');
      headers.forEach(h => {
        
        let th = document.createElement('th');
        let td = document.createElement('td');
        td.innerHTML += `
          ${h}
        `
        th.append(td);
        tableHead.append(th);
      })

      thresh_table_container.append(tableHead);
    }
  
    const write_to_heading = () => {
      heading_container.innerHTML = `<h2>${heading} - ${tax_year}/${tax_year + 1}</h2>`;
    } 
  
  return {
    create_threshold_chart: (h, hc, threshold_container, location, table_container, threshold_type, select_container = false) => {
      heading = h;
      heading_container = hc;
      DOM_container = threshold_container;
      tax_location = location; 
      thresh_table_container = table_container;
      tax_type = threshold_type;
      tax_year = new Date().getFullYear();
      add_id_to_container();
      get_thresholds();
      populate_thresholds();
      write_to_heading();
    }
  }
  
})(UUID_Generator, TAX_THRESHOLD_STATE);
