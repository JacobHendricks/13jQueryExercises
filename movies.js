// Movies App

$('#submit').on('click', function(e){
  e.preventDefault();
  console.log("it works")
  let movie = $('#movie').val()
  let rating = $('#rating').val()

  $('tbody').append(
    `
    <tr>
      <td>${movie}</td>
      <td>${rating}</td>
      <td>
        <button id="delete">
          Delete
        </button>
      </td>
    <tr>
    `)
  
})

$('tbody').on('click', '#delete', function(evt){
  $(evt.target).parent().parent().remove()
  console.log("deleted")
})