angular.module('myApp.directives', ['d3', 'Words'])
  .directive('d3Bars', ['d3Service','$window', 'wordCount', '$q', function(d3Service, $window, wordCount, $q) {

      return {
        restrict: 'EA',
        scope: {
          data: '=',
          onClick: '&' 
        },

        link: function(scope, element, attrs) {
          wordCount.getWordCount().then(function(result){
            console.log("wordcount done");
          d3Service.d3().then(function(d3) {
            console.log("d3 done");
           
            var svg = d3.select(element[0])
              .append("svg")
              .style('width', '100%');

            window.onresize = function(){
              scope.$apply();
            };
            var newData = [];

              for (var key in result){
                newData.push(result[key]);
              }
              newData.sort(function(a, b){
                return (a.count - b.count);
              });
          
            scope.data = newData;

            margin = parseInt(attrs.margin) || 20,
            barPadding = parseInt(attrs.barPadding) || 2.5,
            barHeight = ((480/newData.length)- barPadding) || 10;


            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });
            
            scope.render = function(data) {
              // remove all previous items before render
              svg.selectAll('*').remove();

              // If we don't pass any data, return out of the element
              // if (!data) return;

              // setup variables
              var width = d3.select(element[0]).node().offsetWidth - margin,
                  // calculate the height
                  // height = scope.data.length * (barHeight + barPadding),
                  color = d3.scale.category20b(),
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d.count;
                    })])
                    .range([0, width]);

              // set the height based on the calculations above
              // svg.attr('height', height);

              //create the rectangles for the bar chart
              svg.selectAll('rect')
                .data(data).enter()
                  .append('rect')
                  .attr('height', barHeight)
                  .attr('width', 140)
                  .attr('x', Math.round(margin/2))
                  .attr('y', function(d,i) {
                    return i * (barHeight + barPadding);
                  })
                  .attr('fill', function(d) {
                      return color(d.count);
                    })
                  .on('click', function(d, i) {
                    console.log('click');
                    return scope.onClick({item: d});
                  })
                  .attr('users', function(d) { return d.users; })
                  .transition()
                    .duration(1000)
                    .attr('width', function(d) {
                      return xScale(d.count);
                    })
                    .attr('fill', function(d) {
                      return color(d.count+12);
                    });
                svg.selectAll('text')
                  .data(data)
                  .enter()
                    .append('text')
                    .attr('fill', '#fff')
                    .attr('font-size', '10')
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding) + 15;
                    })
                    .attr('x', 15)
                    .text(function(d) {
                      return d.name + " (" + d.count + ")";
                    });

              // scope.$watch('data', function(newVals, oldVals) {
              //   return scope.render(newVals);
              //   }, true);
            };
          }); //d3 promise
          }); //wordcount promise
        }
      };

  }]);
