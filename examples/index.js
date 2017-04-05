import tsData from './datarepo';

const tsDataKeys = Object.keys(tsData);

// Initialise the options
let metaHTML = '';
tsDataKeys.forEach(key => {
  metaHTML += `<span onclick="demoClickHandler('${key}')" class="list-group-item examples">
    <h4>${tsData[key].metadata.name}</h4>
    <p>${tsData[key].metadata.name}</p>
  </span>`;
});
$("#metadata").html(metaHTML);

// Define the click handler
const tsDOM = $('#demo');
window.demoClickHandler = key => {
  tsDOM.fusiontime({
    width: 850,
    height: 450,
    dataSource: tsData[key].data
  });
};

// Define the defaults
tsDOM.fusiontime({
  width: 850,
  height: 450,
  dataSource: tsData[tsDataKeys[0]].data
});

// Code snippet
const snippet = `
tsDOM.fusiontime({
  width: 850,
  height: 450,
  dataSource: {
    // Chart configs goes here
  }
});
`;
$('#snippet code').append(snippet.trim());
Prism.highlightAll();
