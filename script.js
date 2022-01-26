var map = L.map('map').setView([38.637790965215856, -90.25749206542969], 12);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Forest Park",
        "Review": "5 star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25749206542969,
          38.637790965215856
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Gibson ",
        "Review": "4 star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25989532470703,
          38.62947713789835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "I64",
        "Review": "3 star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.22041320800781,
          38.62840431575503
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Clayton",
        "Review": "5 star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.31929016113281,
          38.64422681447823
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Mississipi River": ""
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.29251098632812,
            38.42669767774884
          ],
          [
            -90.26161193847655,
            38.52587585321114
          ],
          [
            -90.20153045654297,
            38.59057708018653
          ],
          [
            -90.17852783203125,
            38.62920893386745
          ],
          [
            -90.17990112304688,
            38.65602437034701
          ],
          [
            -90.18814086914062,
            38.67961365359827
          ],
          [
            -90.20084381103516,
            38.69167335183297
          ],
          [
            -90.21251678466797,
            38.71230412063499
          ],
          [
            -90.21011352539062,
            38.72730457751627
          ],
          [
            -90.19397735595703,
            38.74256966613668
          ],
          [
            -90.15792846679688,
            38.77790787096093
          ],
          [
            -90.1266860961914,
            38.79530282901593
          ],
          [
            -90.10986328125,
            38.84345132929943
          ],
          [
            -90.11260986328125,
            38.84826438869913
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var parks = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Forest Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30109405517577,
              38.64784672570377
            ],
            [
              -90.30469894409178,
              38.633500077966396
            ],
            [
              -90.26435852050781,
              38.62880662593993
            ],
            [
              -90.26624679565428,
              38.6328296036317
            ],
            [
              -90.26504516601562,
              38.64395866563123
            ],
            [
              -90.30109405517577,
              38.64784672570377
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tower Grove Park",
        "Has Baseball Field": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26830673217773,
              38.609795003286116
            ],
            [
              -90.2691650390625,
              38.605099999739124
            ],
            [
              -90.2668046951294,
              38.605133536568054
            ],
            [
              -90.24234294891357,
              38.60285299649709
            ],
            [
              -90.24131298065186,
              38.60717925349444
            ],
            [
              -90.26830673217773,
              38.609795003286116
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Carondolet Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26976585388184,
              38.56783090208339
            ],
            [
              -90.27315616607665,
              38.56397206004019
            ],
            [
              -90.25963783264159,
              38.557025622192455
            ],
            [
              -90.25551795959473,
              38.56028079984389
            ],
            [
              -90.26976585388184,
              38.56783090208339
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(parks, {
    style: function(feature) {
        switch (feature.properties["Has Baseball Field"]) {
            case 'Yes': return {color: "#00FF00"};
            case 'No':   return {color: "#FF0000"};
        }
    }
}).addTo(map);
