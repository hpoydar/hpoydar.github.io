function drawCircleCuts(context) {
    
  var init_data = [];
  init_data.push('float screen_width = ' + $(window).width() + ';');
  init_data.push('float screen_height = ' + $(window).height() + ';');

  $.get('javascripts/circle_cuts.processing', function(data){
    Processing(
      $(context).get(0), 
      init_data.join('\n') + data
    );
  });
  
}

function setupCircleCuts(context) {
  $(context).drawCircleCuts();
  drawCanvasTag('Randomly generated overlapping circle forms');
  
  // Redraw on resize
  // $(window).resize(function() {
  //   //TODO: Rip from DOM then add again, check for smoothness in Safari
  //   //$(context).remove();
  //   //$(context).drawCircleCuts();
  // });
  
}

jQuery.fn.drawCircleCuts = function() {
  this.each(function() {drawCircleCuts(this);});
}

jQuery.fn.setupCircleCuts = function() {
  this.each(function() {setupCircleCuts(this);});
}

