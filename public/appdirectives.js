angular.module('myApp.directives', ['d3', 'Words'])
  .directive('d3Bars', ['d3Service','$window', 'wordCount', '$q', function(d3Service, $window, wordCount, $q) {

      return {
        restrict: 'EA',
        scope: {

          data: '=',
          label: "@",
          onClick: '&'
        },

        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var svg = d3.select(element[0])
              .append("svg")
              .style('width', '100%')
              .style('height', '100%');

            var margin = parseInt(attrs.margin) || 20,
            barPadding = parseInt(attrs.barPadding) || 2.5;

            window.onresize = function(){
              scope.$apply();
            };

            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });
            scope.$watch('data', function(newVals, oldVals) {
              return scope.render(newVals);
              }, true);
            
            scope.render = function(data) {
  
            var barHeight = ((480/data.length)- barPadding) || 10;


              svg.selectAll('*').remove();

              var width = d3.select(element[0]).node().offsetWidth - margin,

                  color = d3.scale.category20b(),
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d.count;
                    })])
                    .range([0, width]);


              svg.selectAll('rect')
                .data(data).enter()
                  .append('rect')
                  .attr('class', 'bar')
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
                    .attr('pointer-events', 'none')
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding) + 15;
                    })
                    .attr('x', 15)
                    .text(function(d) {
                      return d.name + " (" + d.count + ")";
                    });
            };
          }); 
        }
      };

  }]);
