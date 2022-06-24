import {LoggerService} from "../services/loggerService";
import $ from "jquery";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import {ResponsiveTheme} from "@amcharts/amcharts5/.internal/themes/ResponsiveTheme";
import {AmchartsService} from "../amcharts/amcharts.service";

const logger = new LoggerService();
const chartService = new AmchartsService();

$(() => {
  logger.debug('demoChart');

  // generateChart('demoChart', 'Demo');
  generateMap('firstMap')
});

function generateMap(mapDiv: string) {
  chartService.createMap(mapDiv);
}
