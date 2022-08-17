const heading = 'US Capital Gains Tax Brackets'
const threshold_heading_container = document.querySelector('.btc-heading')
const threshold_container = document.querySelector('.bacc-threshold-chart');
const locationType = threshold_container.dataset.location;
const threshold_type = threshold_container.dataset.threshold;
const threshold_table = threshold_container.querySelector('.btc-table');

THRESHOLD_COMPONENT.create_threshold_chart(
                      heading,
                      threshold_heading_container, 
                      threshold_container, 
                      locationType,
                      threshold_table,
                      threshold_type, 
                      false
                    );


