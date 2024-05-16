import React, { useEffect, useState } from 'react';
import * as Highcharts from 'highcharts/highmaps';
import topology from '../../data/mx-all.topo.json';

export function MexicoMap() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;
  const isTablet = width <= 1024;
  const isDesktop = width > 1024;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getHeight = () => {
    if (isMobile) {
      return 300;
    }
    if (isTablet) {
      return 450;
    }
    if (isDesktop) {
      return 600;
    }

    return 450;
  };

  const initMap = async () => {
    const data = [
      ['mx-3622', 10],
      ['mx-bc', 11],
      ['mx-bs', 12],
      ['mx-so', 13],
      ['mx-cl', 14],
      ['mx-na', 15],
      ['mx-cm', 16],
      ['mx-qr', 17],
      ['mx-mx', 18],
      ['mx-mo', 19],
      ['mx-df', 20],
      ['mx-qt', 21],
      ['mx-tb', 22],
      ['mx-cs', 23],
      ['mx-nl', 24],
      ['mx-si', 25],
      ['mx-ch', 26],
      ['mx-ve', 27],
      ['mx-za', 28],
      ['mx-ag', 29],
      ['mx-ja', 30],
      ['mx-mi', 31],
      ['mx-oa', 32],
      ['mx-pu', 33],
      ['mx-gr', 34],
      ['mx-tl', 35],
      ['mx-tm', 36],
      ['mx-co', 37],
      ['mx-yu', 38],
      ['mx-dg', 39],
      ['mx-gj', 40],
      ['mx-sl', 41],
      ['mx-hg', 42],
    ];

    const options = {
      title: false,
      chart: {
        map: topology,
        backgroundColor: 'transparent',
        height: getHeight(),
      },
      accessibility: {
        enabled: false,
      },
      exporting: false,
      credits: {
        enabled: false,
      },
      mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        enableDoubleClickZoom: false,
        enableTouchZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },
      colors: ['#27272a'],
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}',
      },
      series: [
        {
          data,
          showInLegend: false,
          states: {
            hover: {
              color: '#eab308',
            },
          },
        },
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              click() {
                window.location.href = `/search?state=${
                  // eslint-disable-next-line react/no-this-in-sfc
                  this.properties.fips.split('MX')[1]
                }`;
              },
            },
          },
        },
      },
    };

    Highcharts.mapChart('mexicoMap', options);
  };

  useEffect(() => {
    initMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return <div id="mexicoMap" />;
}
