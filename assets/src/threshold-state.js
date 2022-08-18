const TAX_THRESHOLD_STATE = (() => {
  const tax_thresholds = {
    "UK": {
      "income-tax": {

      }
    },
    "US": {
        "income-tax": {
          "2023": {
            "threshold_1": 1200,
            threshold_2: 1330,
            threshold_3: 4000,
            threshold_4: 5000
          },
          "2022": {
            threshold_1: 1200,
            threshold_2: 1330,
            threshold_3: 4000,
            threshold_4: 5000
          },
          "2021": {
            
          },
          "2020": {
            
          },
          "2019": {
            
          }
        },
        "capital-gains": {
          headers: [
            'Single',
            'Married Filing Jointly',
            'Married Filing Separately',
            'Head of Household',
            'Trusts and Estates',
            'Capital Gains Tax Rate (LT)'
          ],
          "2023": {
            single: {
              "threshold_1": 41685,
              "threshold_2": 459750,
              "threshold_3": 459751,
            },
            married_joint: {
              "threshold_1": 83350,
              "threshold_2": 517200,
              "threshold_3": 517201,
            },
            married_separate: {
              "threshold_1": 41675,
              "threshold_2": 258600,
              "threshold_3": 258601
            },
            head_of_house: {
              "threshold_1": 55800,
              "threshold_2": 258600,
              "threshold_3": 258600,
            }, 
            trust_and_estates: {
              "threshold_1": 2700,
              "threshold_2": 13250,
              "threshold_3": 13250
            },
            rates: {
              rate_1: 0,
              rate_2: 15,
              rate_3: 20
            }
          },
          "2022": {
            single: {
              "threshold_1": 41675,
              "threshold_2": 459750,
              "threshold_3": 459751,
            },
            married_joint: {
              "threshold_1": 83350,
              "threshold_2": 517200,
              "threshold_3": 517201,
            },
            married_separate: {
              "threshold_1": 41675,
              "threshold_2": 258600,
              "threshold_3": 258601
            },
            head_of_house: {
              "threshold_1": 55800,
              "threshold_2": 258600,
              "threshold_3": 258600,
            }, 
            trust_and_estates: {
              "threshold_1": 2700,
              "threshold_2": 13250,
              "threshold_3": 13250
            },
            rates: {
              rate_1: 0,
              rate_2: 15,
              rate_3: 20
            }
          },
          "2021": {
            
          },
          "2020": {
            
          },
          "2019": {
            
          }
        }
      }
    }
  
  return {
    get_all_thresholds: () => {
      return tax_thresholds;
    },
    get_specific_threshold: (location, threshold_type) => {
      location_to_search = tax_thresholds.US;
      if(location === 'UK') location_to_search = tax_thresholds.UK;

      return  location_to_search[threshold_type];
    }
  }
})()