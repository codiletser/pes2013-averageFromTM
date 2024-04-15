// ==UserScript==
// @name         Overall Pro Evolution Soccer
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Show the overall in Pro Evolution Soccer
// @author       codiletser
// @match        https://www.transfermarkt.com/*/startseite/verein/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=transfermarkt.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const arrCalculator = [
  {
    arPos: "CB",
    arAge: 15,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 82,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 83,
    arVal: 31000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 84,
    arVal: 36000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 85,
    arVal: 46000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 86,
    arVal: 58000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 87,
    arVal: 68000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 88,
    arVal: 78000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 89,
    arVal: 88000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 90,
    arVal: 102000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 91,
    arVal: 112000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 92,
    arVal: 126000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 93,
    arVal: 142000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 94,
    arVal: 154000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 95,
    arVal: 170000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 96,
    arVal: 184000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 97,
    arVal: 210000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 98,
    arVal: 224000000
  },
  {
    arPos: "CB",
    arAge: 15,
    arOva: 99,
    arVal: 250000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 82,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 83,
    arVal: 31000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 84,
    arVal: 36000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 85,
    arVal: 46000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 86,
    arVal: 58000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 87,
    arVal: 68000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 88,
    arVal: 78000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 89,
    arVal: 88000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 90,
    arVal: 102000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 91,
    arVal: 112000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 92,
    arVal: 126000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 93,
    arVal: 142000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 94,
    arVal: 154000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 95,
    arVal: 170000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 96,
    arVal: 184000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 97,
    arVal: 210000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 98,
    arVal: 224000000
  },
  {
    arPos: "CB",
    arAge: 16,
    arOva: 99,
    arVal: 250000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 82,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 83,
    arVal: 31000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 84,
    arVal: 36000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 85,
    arVal: 46000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 86,
    arVal: 58000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 87,
    arVal: 68000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 88,
    arVal: 78000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 89,
    arVal: 88000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 90,
    arVal: 102000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 91,
    arVal: 112000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 92,
    arVal: 126000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 93,
    arVal: 142000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 94,
    arVal: 154000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 95,
    arVal: 170000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 96,
    arVal: 184000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 97,
    arVal: 210000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 98,
    arVal: 224000000
  },
  {
    arPos: "CB",
    arAge: 17,
    arOva: 99,
    arVal: 250000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 56,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 57,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 58,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 59,
    arVal: 200000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 60,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 63,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 64,
    arVal: 525000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 65,
    arVal: 650000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 66,
    arVal: 775000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 67,
    arVal: 925000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 71,
    arVal: 1700000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 72,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 73,
    arVal: 2700000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 74,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 75,
    arVal: 5000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 77,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 78,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 79,
    arVal: 15500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 80,
    arVal: 19000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 81,
    arVal: 23000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 82,
    arVal: 27500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 83,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 84,
    arVal: 38000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 85,
    arVal: 48500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 86,
    arVal: 61000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 87,
    arVal: 71500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 88,
    arVal: 82000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 89,
    arVal: 92500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 90,
    arVal: 107000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 91,
    arVal: 117500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 92,
    arVal: 132500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 93,
    arVal: 149000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 94,
    arVal: 161500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 95,
    arVal: 178500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 96,
    arVal: 193000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 97,
    arVal: 220500000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 98,
    arVal: 235000000
  },
  {
    arPos: "CB",
    arAge: 18,
    arOva: 99,
    arVal: 262500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 58,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 59,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 60,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 62,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 63,
    arVal: 450000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 64,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 65,
    arVal: 675000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 66,
    arVal: 800000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 67,
    arVal: 975000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 69,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 70,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 72,
    arVal: 2200000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 73,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 74,
    arVal: 4000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 76,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 77,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 78,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 79,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 80,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 81,
    arVal: 24500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 82,
    arVal: 29000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 83,
    arVal: 34500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 84,
    arVal: 40000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 85,
    arVal: 51000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 86,
    arVal: 64500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 87,
    arVal: 75500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 88,
    arVal: 86500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 89,
    arVal: 97500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 90,
    arVal: 113000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 91,
    arVal: 124500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 92,
    arVal: 140000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 93,
    arVal: 157500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 94,
    arVal: 171000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 95,
    arVal: 188500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 96,
    arVal: 204000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 97,
    arVal: 233000000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 98,
    arVal: 248500000
  },
  {
    arPos: "CB",
    arAge: 19,
    arOva: 99,
    arVal: 277500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 74,
    arVal: 4099999.9999999995
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 79,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 80,
    arVal: 20500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 82,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 83,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 84,
    arVal: 41500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 85,
    arVal: 53000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 86,
    arVal: 66500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 87,
    arVal: 78000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 88,
    arVal: 89500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 89,
    arVal: 101000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 90,
    arVal: 117500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 91,
    arVal: 129000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 92,
    arVal: 145000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 93,
    arVal: 163500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 94,
    arVal: 177000000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 95,
    arVal: 195500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 96,
    arVal: 211500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 97,
    arVal: 241500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 98,
    arVal: 257500000
  },
  {
    arPos: "CB",
    arAge: 20,
    arOva: 99,
    arVal: 287500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 65,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 74,
    arVal: 4400000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 80,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 81,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 82,
    arVal: 31500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 83,
    arVal: 37500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 84,
    arVal: 43500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 85,
    arVal: 55500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 86,
    arVal: 70000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 87,
    arVal: 82500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 88,
    arVal: 94500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 89,
    arVal: 106500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 90,
    arVal: 123500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 91,
    arVal: 135500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 92,
    arVal: 152500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 93,
    arVal: 172000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 94,
    arVal: 186500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 95,
    arVal: 205500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 96,
    arVal: 222500000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 97,
    arVal: 254000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 98,
    arVal: 271000000
  },
  {
    arPos: "CB",
    arAge: 21,
    arOva: 99,
    arVal: 302500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 65,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 74,
    arVal: 4400000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 80,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 81,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 82,
    arVal: 31500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 83,
    arVal: 37500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 84,
    arVal: 43500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 85,
    arVal: 55500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 86,
    arVal: 70000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 87,
    arVal: 82500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 88,
    arVal: 94500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 89,
    arVal: 106500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 90,
    arVal: 123500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 91,
    arVal: 135500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 92,
    arVal: 152500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 93,
    arVal: 172000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 94,
    arVal: 186500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 95,
    arVal: 205500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 96,
    arVal: 222500000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 97,
    arVal: 254000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 98,
    arVal: 271000000
  },
  {
    arPos: "CB",
    arAge: 22,
    arOva: 99,
    arVal: 302500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 81,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 82,
    arVal: 30500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 83,
    arVal: 36500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 84,
    arVal: 42500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 85,
    arVal: 54500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 86,
    arVal: 68500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 87,
    arVal: 80000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 88,
    arVal: 92000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 89,
    arVal: 104000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 90,
    arVal: 120500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 91,
    arVal: 132000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 92,
    arVal: 148500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 93,
    arVal: 167500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 94,
    arVal: 181500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 95,
    arVal: 200500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 96,
    arVal: 217000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 97,
    arVal: 248000000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 98,
    arVal: 264500000
  },
  {
    arPos: "CB",
    arAge: 23,
    arOva: 99,
    arVal: 295000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 81,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 82,
    arVal: 30500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 83,
    arVal: 36500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 84,
    arVal: 42500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 85,
    arVal: 54500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 86,
    arVal: 68500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 87,
    arVal: 80000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 88,
    arVal: 92000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 89,
    arVal: 104000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 90,
    arVal: 120500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 91,
    arVal: 132000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 92,
    arVal: 148500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 93,
    arVal: 167500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 94,
    arVal: 181500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 95,
    arVal: 200500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 96,
    arVal: 217000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 97,
    arVal: 248000000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 98,
    arVal: 264500000
  },
  {
    arPos: "CB",
    arAge: 24,
    arOva: 99,
    arVal: 295000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 62,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 66,
    arVal: 825000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 67,
    arVal: 975000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 69,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 70,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 73,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 74,
    arVal: 4099999.9999999995
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 76,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 77,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 78,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 79,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 80,
    arVal: 20500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 81,
    arVal: 25000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 82,
    arVal: 29500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 83,
    arVal: 35000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 84,
    arVal: 40500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 85,
    arVal: 52000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 86,
    arVal: 65500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 87,
    arVal: 77000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 88,
    arVal: 88000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 89,
    arVal: 99500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 90,
    arVal: 115500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 91,
    arVal: 126500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 92,
    arVal: 142500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 93,
    arVal: 160500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 94,
    arVal: 174000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 95,
    arVal: 192000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 96,
    arVal: 208000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 97,
    arVal: 237500000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 98,
    arVal: 253000000
  },
  {
    arPos: "CB",
    arAge: 25,
    arOva: 99,
    arVal: 282500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 58,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 59,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 60,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 62,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 63,
    arVal: 450000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 64,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 65,
    arVal: 675000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 66,
    arVal: 800000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 67,
    arVal: 975000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 69,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 70,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 72,
    arVal: 2200000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 73,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 74,
    arVal: 4000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 76,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 77,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 78,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 79,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 80,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 81,
    arVal: 24500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 82,
    arVal: 29000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 83,
    arVal: 34500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 84,
    arVal: 40000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 85,
    arVal: 51000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 86,
    arVal: 64500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 87,
    arVal: 75500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 88,
    arVal: 86500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 89,
    arVal: 97500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 90,
    arVal: 113000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 91,
    arVal: 124500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 92,
    arVal: 140000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 93,
    arVal: 157500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 94,
    arVal: 171000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 95,
    arVal: 188500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 96,
    arVal: 204000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 97,
    arVal: 233000000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 98,
    arVal: 248500000
  },
  {
    arPos: "CB",
    arAge: 26,
    arOva: 99,
    arVal: 277500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 56,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 57,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 58,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 59,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 60,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 62,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 63,
    arVal: 450000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 64,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 65,
    arVal: 650000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 66,
    arVal: 800000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 67,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 69,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 70,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 71,
    arVal: 1700000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 72,
    arVal: 2200000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 73,
    arVal: 2800000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 74,
    arVal: 3900000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 75,
    arVal: 5000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 76,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 77,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 78,
    arVal: 13000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 79,
    arVal: 16000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 80,
    arVal: 19500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 81,
    arVal: 24000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 82,
    arVal: 28000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 83,
    arVal: 33500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 84,
    arVal: 39000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 85,
    arVal: 49500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 86,
    arVal: 62500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 87,
    arVal: 73500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 88,
    arVal: 84000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 89,
    arVal: 95000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 90,
    arVal: 110000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 91,
    arVal: 121000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 92,
    arVal: 136000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 93,
    arVal: 153500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 94,
    arVal: 166500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 95,
    arVal: 183500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 96,
    arVal: 198500000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 97,
    arVal: 227000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 98,
    arVal: 242000000
  },
  {
    arPos: "CB",
    arAge: 27,
    arOva: 99,
    arVal: 270000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 58,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 63,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 65,
    arVal: 625000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 82,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 83,
    arVal: 31500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 84,
    arVal: 36500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 85,
    arVal: 46500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 86,
    arVal: 58500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 87,
    arVal: 68500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 88,
    arVal: 79000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 89,
    arVal: 89000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 90,
    arVal: 103000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 91,
    arVal: 113000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 92,
    arVal: 127500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 93,
    arVal: 143500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 94,
    arVal: 155500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 95,
    arVal: 171500000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 96,
    arVal: 186000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 97,
    arVal: 212000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 98,
    arVal: 226000000
  },
  {
    arPos: "CB",
    arAge: 28,
    arOva: 99,
    arVal: 252500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 67,
    arVal: 850000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 74,
    arVal: 3500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 75,
    arVal: 4700000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 79,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 80,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 81,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 82,
    arVal: 25500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 83,
    arVal: 30500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 84,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 85,
    arVal: 45000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 86,
    arVal: 57000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 87,
    arVal: 66500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 88,
    arVal: 76500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 89,
    arVal: 86000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 90,
    arVal: 100000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 91,
    arVal: 110000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 92,
    arVal: 123500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 93,
    arVal: 139000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 94,
    arVal: 151000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 95,
    arVal: 166500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 96,
    arVal: 180500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 97,
    arVal: 206000000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 98,
    arVal: 219500000
  },
  {
    arPos: "CB",
    arAge: 29,
    arOva: 99,
    arVal: 245000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 66,
    arVal: 700000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 67,
    arVal: 825000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 74,
    arVal: 3500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 75,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 78,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 79,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 80,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 81,
    arVal: 21000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 82,
    arVal: 25000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 83,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 84,
    arVal: 34500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 85,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 86,
    arVal: 55500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 87,
    arVal: 65500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 88,
    arVal: 75000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 89,
    arVal: 84500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 90,
    arVal: 98000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 91,
    arVal: 107500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 92,
    arVal: 121000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 93,
    arVal: 136500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 94,
    arVal: 148000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 95,
    arVal: 163000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 96,
    arVal: 176500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 97,
    arVal: 201500000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 98,
    arVal: 215000000
  },
  {
    arPos: "CB",
    arAge: 30,
    arOva: 99,
    arVal: 240000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 59,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 61,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 66,
    arVal: 575000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 67,
    arVal: 700000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 68,
    arVal: 825000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 69,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 73,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 74,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 75,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 77,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 78,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 79,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 80,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 81,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 82,
    arVal: 21000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 83,
    arVal: 25000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 84,
    arVal: 29000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 85,
    arVal: 37000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 86,
    arVal: 46500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 87,
    arVal: 54500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 88,
    arVal: 62500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 89,
    arVal: 70500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 90,
    arVal: 81500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 91,
    arVal: 89500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 92,
    arVal: 101000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 93,
    arVal: 113500000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 94,
    arVal: 123000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 95,
    arVal: 136000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 96,
    arVal: 147000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 97,
    arVal: 168000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 98,
    arVal: 179000000
  },
  {
    arPos: "CB",
    arAge: 31,
    arOva: 99,
    arVal: 200000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 55,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 56,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 58,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 59,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 60,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 61,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 62,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 63,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 64,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 65,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 66,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 67,
    arVal: 650000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 68,
    arVal: 775000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 69,
    arVal: 900000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 70,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 71,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 72,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 73,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 74,
    arVal: 2700000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 75,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 76,
    arVal: 4900000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 77,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 78,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 79,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 80,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 81,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 82,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 83,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 84,
    arVal: 27500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 85,
    arVal: 35000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 86,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 87,
    arVal: 51500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 88,
    arVal: 59500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 89,
    arVal: 67000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 90,
    arVal: 77500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 91,
    arVal: 85000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 92,
    arVal: 96000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 93,
    arVal: 108000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 94,
    arVal: 117000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 95,
    arVal: 129000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 96,
    arVal: 140000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 97,
    arVal: 159500000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 98,
    arVal: 170000000
  },
  {
    arPos: "CB",
    arAge: 32,
    arOva: 99,
    arVal: 190000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 45,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 46,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 47,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 48,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 49,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 50,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 51,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 52,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 53,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 54,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 55,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 56,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 57,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 58,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 59,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 60,
    arVal: 120000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 61,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 62,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 63,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 64,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 65,
    arVal: 350000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 66,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 67,
    arVal: 475000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 68,
    arVal: 575000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 69,
    arVal: 675000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 70,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 71,
    arVal: 900000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 72,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 73,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 74,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 75,
    arVal: 2700000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 76,
    arVal: 3600000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 77,
    arVal: 5000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 78,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 79,
    arVal: 8500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 80,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 81,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 82,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 83,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 84,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 85,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 86,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 87,
    arVal: 38000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 88,
    arVal: 43500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 89,
    arVal: 49500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 90,
    arVal: 57000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 91,
    arVal: 62500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 92,
    arVal: 70500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 93,
    arVal: 79500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 94,
    arVal: 86000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 95,
    arVal: 95000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 96,
    arVal: 103000000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 97,
    arVal: 117500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 98,
    arVal: 125500000
  },
  {
    arPos: "CB",
    arAge: 33,
    arOva: 99,
    arVal: 140000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 64,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 70,
    arVal: 525000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 77,
    arVal: 3400000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 78,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 81,
    arVal: 8500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 82,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 83,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 85,
    arVal: 17500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 86,
    arVal: 22000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 87,
    arVal: 26000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 88,
    arVal: 29500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 89,
    arVal: 33500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 90,
    arVal: 39000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 91,
    arVal: 42500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 92,
    arVal: 48000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 93,
    arVal: 54000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 94,
    arVal: 58500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 95,
    arVal: 64500000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 96,
    arVal: 70000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 97,
    arVal: 80000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 98,
    arVal: 85000000
  },
  {
    arPos: "CB",
    arAge: 34,
    arOva: 99,
    arVal: 95000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 53,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 54,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 55,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 56,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 57,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 58,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 59,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 60,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 61,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 62,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 63,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 64,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 65,
    arVal: 190000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 66,
    arVal: 230000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 67,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 68,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 69,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 70,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 71,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 72,
    arVal: 625000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 73,
    arVal: 800000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 74,
    arVal: 1100000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 75,
    arVal: 1500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 76,
    arVal: 2000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 77,
    arVal: 2800000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 78,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 79,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 80,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 81,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 82,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 83,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 84,
    arVal: 11000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 85,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 86,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 87,
    arVal: 21000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 88,
    arVal: 24000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 89,
    arVal: 27500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 90,
    arVal: 31500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 91,
    arVal: 34500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 92,
    arVal: 39000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 93,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 94,
    arVal: 47500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 95,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 96,
    arVal: 57000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 97,
    arVal: 65000000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 98,
    arVal: 69500000
  },
  {
    arPos: "CB",
    arAge: 35,
    arOva: 99,
    arVal: 77500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 60,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 63,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 65,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 67,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 68,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 69,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 72,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 73,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 74,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 75,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 77,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 78,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 79,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 80,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 81,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 82,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 83,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 84,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 85,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 86,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 87,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 88,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 89,
    arVal: 18500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 90,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 91,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 92,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 93,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 94,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 95,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 96,
    arVal: 38500000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 97,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 98,
    arVal: 47000000
  },
  {
    arPos: "CB",
    arAge: 36,
    arOva: 99,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 60,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 63,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 65,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 67,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 68,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 69,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 72,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 73,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 74,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 75,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 77,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 78,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 79,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 80,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 81,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 82,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 83,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 84,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 85,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 86,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 87,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 88,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 89,
    arVal: 18500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 90,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 91,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 92,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 93,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 94,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 95,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 96,
    arVal: 38500000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 97,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 98,
    arVal: 47000000
  },
  {
    arPos: "CB",
    arAge: 37,
    arOva: 99,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 60,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 63,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 65,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 67,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 68,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 69,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 72,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 73,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 74,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 75,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 77,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 78,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 79,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 80,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 81,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 82,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 83,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 84,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 85,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 86,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 87,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 88,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 89,
    arVal: 18500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 90,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 91,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 92,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 93,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 94,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 95,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 96,
    arVal: 38500000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 97,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 98,
    arVal: 47000000
  },
  {
    arPos: "CB",
    arAge: 38,
    arOva: 99,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 60,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 63,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 65,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 67,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 68,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 69,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 72,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 73,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 74,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 75,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 77,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 78,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 79,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 80,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 81,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 82,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 83,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 84,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 85,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 86,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 87,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 88,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 89,
    arVal: 18500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 90,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 91,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 92,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 93,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 94,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 95,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 96,
    arVal: 38500000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 97,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 98,
    arVal: 47000000
  },
  {
    arPos: "CB",
    arAge: 39,
    arOva: 99,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 60,
    arVal: 45000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 63,
    arVal: 90000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 65,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 67,
    arVal: 180000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 68,
    arVal: 220000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 69,
    arVal: 250000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 72,
    arVal: 425000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 73,
    arVal: 550000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 74,
    arVal: 750000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 75,
    arVal: 1000000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 77,
    arVal: 1900000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 78,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 79,
    arVal: 3100000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 80,
    arVal: 3800000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 81,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 82,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 83,
    arVal: 6500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 84,
    arVal: 7500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 85,
    arVal: 9500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 86,
    arVal: 12000000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 87,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 88,
    arVal: 16500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 89,
    arVal: 18500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 90,
    arVal: 21500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 91,
    arVal: 23500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 92,
    arVal: 26500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 93,
    arVal: 30000000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 94,
    arVal: 32500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 95,
    arVal: 35500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 96,
    arVal: 38500000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 97,
    arVal: 44000000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 98,
    arVal: 47000000
  },
  {
    arPos: "CB",
    arAge: 40,
    arOva: 99,
    arVal: 52500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 45,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 46,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 47,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 48,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 49,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 50,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 51,
    arVal: 4000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 52,
    arVal: 5000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 53,
    arVal: 6000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 54,
    arVal: 7000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 55,
    arVal: 9000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 56,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 57,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 58,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 59,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 60,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 61,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 62,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 63,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 64,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 65,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 66,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 67,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 68,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 69,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 70,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 71,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 72,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 73,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 74,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 75,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 76,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 77,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 78,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 79,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 80,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 81,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 82,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 83,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 84,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 85,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 86,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 87,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 88,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 89,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 90,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 91,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 92,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 93,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 94,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 95,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 96,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 97,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 98,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 41,
    arOva: 99,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 45,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 46,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 47,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 48,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 49,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 50,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 51,
    arVal: 4000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 52,
    arVal: 5000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 53,
    arVal: 6000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 54,
    arVal: 7000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 55,
    arVal: 9000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 56,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 57,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 58,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 59,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 60,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 61,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 62,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 63,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 64,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 65,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 66,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 67,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 68,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 69,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 70,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 71,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 72,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 73,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 74,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 75,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 76,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 77,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 78,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 79,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 80,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 81,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 82,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 83,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 84,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 85,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 86,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 87,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 88,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 89,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 90,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 91,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 92,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 93,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 94,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 95,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 96,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 97,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 98,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 42,
    arOva: 99,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 45,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 46,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 47,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 48,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 49,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 50,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 51,
    arVal: 4000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 52,
    arVal: 5000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 53,
    arVal: 6000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 54,
    arVal: 7000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 55,
    arVal: 9000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 56,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 57,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 58,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 59,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 60,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 61,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 62,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 63,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 64,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 65,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 66,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 67,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 68,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 69,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 70,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 71,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 72,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 73,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 74,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 75,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 76,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 77,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 78,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 79,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 80,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 81,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 82,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 83,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 84,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 85,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 86,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 87,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 88,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 89,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 90,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 91,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 92,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 93,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 94,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 95,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 96,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 97,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 98,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 43,
    arOva: 99,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 45,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 46,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 47,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 48,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 49,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 50,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 51,
    arVal: 4000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 52,
    arVal: 5000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 53,
    arVal: 6000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 54,
    arVal: 7000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 55,
    arVal: 9000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 56,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 57,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 58,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 59,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 60,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 61,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 62,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 63,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 64,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 65,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 66,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 67,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 68,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 69,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 70,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 71,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 72,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 73,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 74,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 75,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 76,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 77,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 78,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 79,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 80,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 81,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 82,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 83,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 84,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 85,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 86,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 87,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 88,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 89,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 90,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 91,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 92,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 93,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 94,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 95,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 96,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 97,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 98,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 44,
    arOva: 99,
    arVal: 20000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 45,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 46,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 47,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 48,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 49,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 50,
    arVal: 3200
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 51,
    arVal: 4000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 52,
    arVal: 5000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 53,
    arVal: 6000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 54,
    arVal: 7000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 55,
    arVal: 9000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 56,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 57,
    arVal: 10000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 58,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 59,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 60,
    arVal: 15000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 61,
    arVal: 20000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 62,
    arVal: 25000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 63,
    arVal: 35000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 64,
    arVal: 40000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 65,
    arVal: 50000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 66,
    arVal: 60000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 67,
    arVal: 70000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 68,
    arVal: 80000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 69,
    arVal: 100000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 70,
    arVal: 110000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 71,
    arVal: 130000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 72,
    arVal: 160000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 73,
    arVal: 210000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 74,
    arVal: 300000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 75,
    arVal: 375000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 76,
    arVal: 500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 77,
    arVal: 725000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 78,
    arVal: 950000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 79,
    arVal: 1200000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 80,
    arVal: 1400000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 81,
    arVal: 1800000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 82,
    arVal: 2100000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 83,
    arVal: 2500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 84,
    arVal: 2900000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 85,
    arVal: 3700000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 86,
    arVal: 4600000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 87,
    arVal: 5500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 88,
    arVal: 6000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 89,
    arVal: 7000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 90,
    arVal: 8000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 91,
    arVal: 9000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 92,
    arVal: 10000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 93,
    arVal: 11500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 94,
    arVal: 12500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 95,
    arVal: 13500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 96,
    arVal: 14500000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 97,
    arVal: 17000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 98,
    arVal: 18000000
  },
  {
    arPos: "CB",
    arAge: 45,
    arOva: 99,
    arVal: 20000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 82,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 83,
    arVal: 36000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 84,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 85,
    arVal: 53500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 86,
    arVal: 67500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 87,
    arVal: 79000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 88,
    arVal: 90500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 89,
    arVal: 102000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 90,
    arVal: 118500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 91,
    arVal: 130000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 92,
    arVal: 146000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 93,
    arVal: 164500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 94,
    arVal: 178500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 95,
    arVal: 197000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 96,
    arVal: 213500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 97,
    arVal: 243500000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 98,
    arVal: 260000000
  },
  {
    arPos: "CM",
    arAge: 15,
    arOva: 99,
    arVal: 290000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 82,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 83,
    arVal: 36000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 84,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 85,
    arVal: 53500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 86,
    arVal: 67500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 87,
    arVal: 79000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 88,
    arVal: 90500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 89,
    arVal: 102000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 90,
    arVal: 118500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 91,
    arVal: 130000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 92,
    arVal: 146000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 93,
    arVal: 164500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 94,
    arVal: 178500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 95,
    arVal: 197000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 96,
    arVal: 213500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 97,
    arVal: 243500000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 98,
    arVal: 260000000
  },
  {
    arPos: "CM",
    arAge: 16,
    arOva: 99,
    arVal: 290000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 82,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 83,
    arVal: 36000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 84,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 85,
    arVal: 53500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 86,
    arVal: 67500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 87,
    arVal: 79000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 88,
    arVal: 90500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 89,
    arVal: 102000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 90,
    arVal: 118500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 91,
    arVal: 130000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 92,
    arVal: 146000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 93,
    arVal: 164500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 94,
    arVal: 178500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 95,
    arVal: 197000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 96,
    arVal: 213500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 97,
    arVal: 243500000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 98,
    arVal: 260000000
  },
  {
    arPos: "CM",
    arAge: 17,
    arOva: 99,
    arVal: 290000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 65,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 74,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 80,
    arVal: 22000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 81,
    arVal: 26500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 82,
    arVal: 31500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 83,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 84,
    arVal: 43500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 85,
    arVal: 55500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 86,
    arVal: 70000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 87,
    arVal: 82500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 88,
    arVal: 94500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 89,
    arVal: 106500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 90,
    arVal: 123500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 91,
    arVal: 135500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 92,
    arVal: 152500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 93,
    arVal: 172000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 94,
    arVal: 186500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 95,
    arVal: 205500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 96,
    arVal: 222500000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 97,
    arVal: 254000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 98,
    arVal: 271000000
  },
  {
    arPos: "CM",
    arAge: 18,
    arOva: 99,
    arVal: 302500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 59,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 62,
    arVal: 425000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 64,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 65,
    arVal: 775000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 66,
    arVal: 925000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 70,
    arVal: 1700000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 71,
    arVal: 2000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 72,
    arVal: 2500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 73,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 74,
    arVal: 4600000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 76,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 78,
    arVal: 15000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 79,
    arVal: 19000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 80,
    arVal: 23000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 81,
    arVal: 28000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 82,
    arVal: 33000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 83,
    arVal: 39500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 84,
    arVal: 45500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 85,
    arVal: 58500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 86,
    arVal: 73500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 87,
    arVal: 86500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 88,
    arVal: 99000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 89,
    arVal: 112000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 90,
    arVal: 129500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 91,
    arVal: 142000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 92,
    arVal: 160000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 93,
    arVal: 180500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 94,
    arVal: 195500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 95,
    arVal: 216000000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 96,
    arVal: 233500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 97,
    arVal: 266500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 98,
    arVal: 284500000
  },
  {
    arPos: "CM",
    arAge: 19,
    arOva: 99,
    arVal: 317500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 64,
    arVal: 650000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 65,
    arVal: 800000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 66,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 72,
    arVal: 2600000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 73,
    arVal: 3400000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 74,
    arVal: 4700000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 77,
    arVal: 12000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 78,
    arVal: 15500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 79,
    arVal: 19500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 80,
    arVal: 23500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 81,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 82,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 83,
    arVal: 40500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 84,
    arVal: 47000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 85,
    arVal: 60500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 86,
    arVal: 76000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 87,
    arVal: 89000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 88,
    arVal: 102000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 89,
    arVal: 115500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 90,
    arVal: 133500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 91,
    arVal: 146500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 92,
    arVal: 165000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 93,
    arVal: 186000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 94,
    arVal: 201500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 95,
    arVal: 222500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 96,
    arVal: 241000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 97,
    arVal: 275000000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 98,
    arVal: 293500000
  },
  {
    arPos: "CM",
    arAge: 20,
    arOva: 99,
    arVal: 327500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 74,
    arVal: 4900000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 78,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 79,
    arVal: 20500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 80,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 81,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 82,
    arVal: 35500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 83,
    arVal: 42500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 84,
    arVal: 49500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 85,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 86,
    arVal: 79500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 87,
    arVal: 93000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 88,
    arVal: 107000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 89,
    arVal: 120500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 90,
    arVal: 139500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 91,
    arVal: 153500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 92,
    arVal: 172500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 93,
    arVal: 194500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 94,
    arVal: 211000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 95,
    arVal: 233000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 96,
    arVal: 252000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 97,
    arVal: 287500000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 98,
    arVal: 307000000
  },
  {
    arPos: "CM",
    arAge: 21,
    arOva: 99,
    arVal: 342500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 74,
    arVal: 4900000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 78,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 79,
    arVal: 20500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 80,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 81,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 82,
    arVal: 35500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 83,
    arVal: 42500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 84,
    arVal: 49500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 85,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 86,
    arVal: 79500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 87,
    arVal: 93000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 88,
    arVal: 107000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 89,
    arVal: 120500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 90,
    arVal: 139500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 91,
    arVal: 153500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 92,
    arVal: 172500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 93,
    arVal: 194500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 94,
    arVal: 211000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 95,
    arVal: 233000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 96,
    arVal: 252000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 97,
    arVal: 287500000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 98,
    arVal: 307000000
  },
  {
    arPos: "CM",
    arAge: 22,
    arOva: 99,
    arVal: 342500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 66,
    arVal: 975000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 73,
    arVal: 3500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 74,
    arVal: 4800000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 77,
    arVal: 12000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 78,
    arVal: 16000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 79,
    arVal: 20000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 80,
    arVal: 24000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 81,
    arVal: 29500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 82,
    arVal: 35000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 83,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 84,
    arVal: 48000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 85,
    arVal: 61500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 86,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 87,
    arVal: 91000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 88,
    arVal: 104500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 89,
    arVal: 118000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 90,
    arVal: 136500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 91,
    arVal: 150000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 92,
    arVal: 169000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 93,
    arVal: 190500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 94,
    arVal: 206500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 95,
    arVal: 228000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 96,
    arVal: 246500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 97,
    arVal: 281500000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 98,
    arVal: 300000000
  },
  {
    arPos: "CM",
    arAge: 23,
    arOva: 99,
    arVal: 335000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 66,
    arVal: 975000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 73,
    arVal: 3500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 74,
    arVal: 4800000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 77,
    arVal: 12000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 78,
    arVal: 16000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 79,
    arVal: 20000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 80,
    arVal: 24000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 81,
    arVal: 29500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 82,
    arVal: 35000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 83,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 84,
    arVal: 48000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 85,
    arVal: 61500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 86,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 87,
    arVal: 91000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 88,
    arVal: 104500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 89,
    arVal: 118000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 90,
    arVal: 136500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 91,
    arVal: 150000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 92,
    arVal: 169000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 93,
    arVal: 190500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 94,
    arVal: 206500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 95,
    arVal: 228000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 96,
    arVal: 246500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 97,
    arVal: 281500000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 98,
    arVal: 300000000
  },
  {
    arPos: "CM",
    arAge: 24,
    arOva: 99,
    arVal: 335000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 64,
    arVal: 650000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 65,
    arVal: 775000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 66,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 72,
    arVal: 2600000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 73,
    arVal: 3400000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 74,
    arVal: 4600000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 78,
    arVal: 15500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 79,
    arVal: 19500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 80,
    arVal: 23000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 81,
    arVal: 28500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 82,
    arVal: 33500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 83,
    arVal: 40000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 84,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 85,
    arVal: 59500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 86,
    arVal: 75000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 87,
    arVal: 87500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 88,
    arVal: 100500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 89,
    arVal: 113500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 90,
    arVal: 131500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 91,
    arVal: 144500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 92,
    arVal: 162500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 93,
    arVal: 183000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 94,
    arVal: 198500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 95,
    arVal: 219500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 96,
    arVal: 237500000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 97,
    arVal: 271000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 98,
    arVal: 289000000
  },
  {
    arPos: "CM",
    arAge: 25,
    arOva: 99,
    arVal: 322500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 59,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 62,
    arVal: 425000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 64,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 65,
    arVal: 775000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 66,
    arVal: 925000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 70,
    arVal: 1700000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 71,
    arVal: 2000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 72,
    arVal: 2500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 73,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 74,
    arVal: 4600000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 76,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 78,
    arVal: 15000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 79,
    arVal: 19000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 80,
    arVal: 23000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 81,
    arVal: 28000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 82,
    arVal: 33000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 83,
    arVal: 39500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 84,
    arVal: 45500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 85,
    arVal: 58500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 86,
    arVal: 73500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 87,
    arVal: 86500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 88,
    arVal: 99000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 89,
    arVal: 112000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 90,
    arVal: 129500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 91,
    arVal: 142000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 92,
    arVal: 160000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 93,
    arVal: 180500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 94,
    arVal: 195500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 95,
    arVal: 216000000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 96,
    arVal: 233500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 97,
    arVal: 266500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 98,
    arVal: 284500000
  },
  {
    arPos: "CM",
    arAge: 26,
    arOva: 99,
    arVal: 317500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 59,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 62,
    arVal: 425000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 64,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 65,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 66,
    arVal: 900000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 70,
    arVal: 1700000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 71,
    arVal: 2000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 72,
    arVal: 2500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 73,
    arVal: 3200000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 74,
    arVal: 4500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 76,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 78,
    arVal: 15000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 79,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 80,
    arVal: 22500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 81,
    arVal: 27500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 82,
    arVal: 32000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 83,
    arVal: 38500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 84,
    arVal: 44500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 85,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 86,
    arVal: 72000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 87,
    arVal: 84500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 88,
    arVal: 96500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 89,
    arVal: 109000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 90,
    arVal: 126500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 91,
    arVal: 139000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 92,
    arVal: 156000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 93,
    arVal: 176000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 94,
    arVal: 191000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 95,
    arVal: 211000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 96,
    arVal: 228000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 97,
    arVal: 260500000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 98,
    arVal: 278000000
  },
  {
    arPos: "CM",
    arAge: 27,
    arOva: 99,
    arVal: 310000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 82,
    arVal: 30500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 83,
    arVal: 36500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 84,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 85,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 86,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 87,
    arVal: 79500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 88,
    arVal: 91500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 89,
    arVal: 103000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 90,
    arVal: 119500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 91,
    arVal: 131000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 92,
    arVal: 147500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 93,
    arVal: 166000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 94,
    arVal: 180000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 95,
    arVal: 199000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 96,
    arVal: 215500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 97,
    arVal: 245500000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 98,
    arVal: 262000000
  },
  {
    arPos: "CM",
    arAge: 28,
    arOva: 99,
    arVal: 292500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 66,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 74,
    arVal: 4099999.9999999995
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 78,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 79,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 80,
    arVal: 20500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 81,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 82,
    arVal: 29500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 83,
    arVal: 35500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 84,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 85,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 86,
    arVal: 66000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 87,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 88,
    arVal: 89000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 89,
    arVal: 100500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 90,
    arVal: 116500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 91,
    arVal: 127500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 92,
    arVal: 143500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 93,
    arVal: 162000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 94,
    arVal: 175500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 95,
    arVal: 194000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 96,
    arVal: 210000000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 97,
    arVal: 239500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 98,
    arVal: 255500000
  },
  {
    arPos: "CM",
    arAge: 29,
    arOva: 99,
    arVal: 285000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 54,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 58,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 62,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 63,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 64,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 65,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 66,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 67,
    arVal: 975000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 69,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 70,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 72,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 73,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 74,
    arVal: 4000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 76,
    arVal: 7000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 77,
    arVal: 10000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 78,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 79,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 80,
    arVal: 20000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 81,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 82,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 83,
    arVal: 34500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 84,
    arVal: 40500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 85,
    arVal: 51500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 86,
    arVal: 65000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 87,
    arVal: 76000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 88,
    arVal: 87500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 89,
    arVal: 98500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 90,
    arVal: 114000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 91,
    arVal: 125500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 92,
    arVal: 141000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 93,
    arVal: 159000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 94,
    arVal: 172500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 95,
    arVal: 190500000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 96,
    arVal: 206000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 97,
    arVal: 235000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 98,
    arVal: 251000000
  },
  {
    arPos: "CM",
    arAge: 30,
    arOva: 99,
    arVal: 280000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 66,
    arVal: 700000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 67,
    arVal: 825000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 74,
    arVal: 3500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 75,
    arVal: 4600000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 78,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 79,
    arVal: 14500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 80,
    arVal: 17500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 81,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 82,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 83,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 84,
    arVal: 34500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 85,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 86,
    arVal: 55500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 87,
    arVal: 65500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 88,
    arVal: 75000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 89,
    arVal: 84500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 90,
    arVal: 98000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 91,
    arVal: 107500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 92,
    arVal: 121000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 93,
    arVal: 136500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 94,
    arVal: 148000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 95,
    arVal: 163000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 96,
    arVal: 176500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 97,
    arVal: 201500000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 98,
    arVal: 215000000
  },
  {
    arPos: "CM",
    arAge: 31,
    arOva: 99,
    arVal: 240000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 56,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 58,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 60,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 61,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 63,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 64,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 65,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 66,
    arVal: 675000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 67,
    arVal: 800000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 68,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 72,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 73,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 74,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 75,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 78,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 79,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 80,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 81,
    arVal: 20000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 82,
    arVal: 24000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 83,
    arVal: 28500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 84,
    arVal: 33000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 85,
    arVal: 42500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 86,
    arVal: 53500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 87,
    arVal: 62500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 88,
    arVal: 72000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 89,
    arVal: 81000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 90,
    arVal: 94000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 91,
    arVal: 103000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 92,
    arVal: 116000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 93,
    arVal: 130500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 94,
    arVal: 141500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 95,
    arVal: 156500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 96,
    arVal: 169500000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 97,
    arVal: 193000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 98,
    arVal: 206000000
  },
  {
    arPos: "CM",
    arAge: 32,
    arOva: 99,
    arVal: 230000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 51,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 55,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 56,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 57,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 58,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 59,
    arVal: 140000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 60,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 61,
    arVal: 200000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 62,
    arVal: 240000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 63,
    arVal: 300000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 64,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 65,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 66,
    arVal: 525000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 67,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 68,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 69,
    arVal: 850000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 70,
    arVal: 975000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 71,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 72,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 73,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 74,
    arVal: 2600000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 75,
    arVal: 3500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 76,
    arVal: 4600000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 77,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 78,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 79,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 80,
    arVal: 13000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 81,
    arVal: 16000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 82,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 83,
    arVal: 22500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 84,
    arVal: 26000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 85,
    arVal: 33000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 86,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 87,
    arVal: 49000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 88,
    arVal: 56000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 89,
    arVal: 63500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 90,
    arVal: 73500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 91,
    arVal: 80500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 92,
    arVal: 90500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 93,
    arVal: 102000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 94,
    arVal: 111000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 95,
    arVal: 122500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 96,
    arVal: 132500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 97,
    arVal: 151000000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 98,
    arVal: 161500000
  },
  {
    arPos: "CM",
    arAge: 33,
    arOva: 99,
    arVal: 180000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 45,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 46,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 47,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 48,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 49,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 50,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 51,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 52,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 53,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 54,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 55,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 56,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 57,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 58,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 59,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 60,
    arVal: 110000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 61,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 62,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 63,
    arVal: 220000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 64,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 65,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 66,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 67,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 68,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 69,
    arVal: 650000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 70,
    arVal: 725000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 71,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 72,
    arVal: 1100000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 73,
    arVal: 1400000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 74,
    arVal: 1900000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 75,
    arVal: 2600000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 76,
    arVal: 3500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 77,
    arVal: 4900000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 78,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 79,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 80,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 81,
    arVal: 12000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 82,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 83,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 84,
    arVal: 19500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 85,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 86,
    arVal: 31500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 87,
    arVal: 36500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 88,
    arVal: 42000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 89,
    arVal: 47500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 90,
    arVal: 55000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 91,
    arVal: 60500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 92,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 93,
    arVal: 76500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 94,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 95,
    arVal: 92000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 96,
    arVal: 99500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 97,
    arVal: 113500000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 98,
    arVal: 121000000
  },
  {
    arPos: "CM",
    arAge: 34,
    arOva: 99,
    arVal: 135000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 45,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 46,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 47,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 48,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 49,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 50,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 51,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 52,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 53,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 54,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 55,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 56,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 57,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 58,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 59,
    arVal: 90000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 60,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 61,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 62,
    arVal: 160000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 63,
    arVal: 190000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 64,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 65,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 66,
    arVal: 350000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 67,
    arVal: 400000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 68,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 69,
    arVal: 550000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 70,
    arVal: 650000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 71,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 72,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 73,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 74,
    arVal: 1700000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 75,
    arVal: 2300000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 76,
    arVal: 3000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 77,
    arVal: 4200000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 78,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 79,
    arVal: 7000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 80,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 81,
    arVal: 10500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 82,
    arVal: 12000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 83,
    arVal: 14500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 84,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 85,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 86,
    arVal: 27500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 87,
    arVal: 32000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 88,
    arVal: 36500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 89,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 90,
    arVal: 48000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 91,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 92,
    arVal: 59000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 93,
    arVal: 66500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 94,
    arVal: 72500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 95,
    arVal: 80000000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 96,
    arVal: 86500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 97,
    arVal: 98500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 98,
    arVal: 105500000
  },
  {
    arPos: "CM",
    arAge: 35,
    arOva: 99,
    arVal: 117500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 58,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 61,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 63,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 64,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 68,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 70,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 73,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 74,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 77,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 78,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 80,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 81,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 82,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 83,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 85,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 86,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 87,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 88,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 89,
    arVal: 32500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 90,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 91,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 92,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 93,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 94,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 95,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 96,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 97,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 98,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 36,
    arOva: 99,
    arVal: 92500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 58,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 61,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 63,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 64,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 68,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 70,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 73,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 74,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 77,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 78,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 80,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 81,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 82,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 83,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 85,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 86,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 87,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 88,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 89,
    arVal: 32500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 90,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 91,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 92,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 93,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 94,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 95,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 96,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 97,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 98,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 37,
    arOva: 99,
    arVal: 92500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 58,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 61,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 63,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 64,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 68,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 70,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 73,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 74,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 77,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 78,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 80,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 81,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 82,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 83,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 85,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 86,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 87,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 88,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 89,
    arVal: 32500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 90,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 91,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 92,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 93,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 94,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 95,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 96,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 97,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 98,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 38,
    arOva: 99,
    arVal: 92500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 58,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 61,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 63,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 64,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 68,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 70,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 73,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 74,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 77,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 78,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 80,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 81,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 82,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 83,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 85,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 86,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 87,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 88,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 89,
    arVal: 32500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 90,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 91,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 92,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 93,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 94,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 95,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 96,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 97,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 98,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 39,
    arOva: 99,
    arVal: 92500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 58,
    arVal: 60000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 61,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 63,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 64,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 68,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 70,
    arVal: 500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 73,
    arVal: 950000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 74,
    arVal: 1300000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 77,
    arVal: 3300000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 78,
    arVal: 4400000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 80,
    arVal: 6500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 81,
    arVal: 8000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 82,
    arVal: 9500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 83,
    arVal: 11500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 85,
    arVal: 17000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 86,
    arVal: 21500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 87,
    arVal: 25000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 88,
    arVal: 29000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 89,
    arVal: 32500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 90,
    arVal: 37500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 91,
    arVal: 41500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 92,
    arVal: 46500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 93,
    arVal: 52500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 94,
    arVal: 57000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 95,
    arVal: 63000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 96,
    arVal: 68000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 97,
    arVal: 77500000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 98,
    arVal: 83000000
  },
  {
    arPos: "CM",
    arAge: 40,
    arOva: 99,
    arVal: 92500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 56,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 57,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 58,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 59,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 60,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 61,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 62,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 63,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 64,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 65,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 66,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 67,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 68,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 69,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 70,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 71,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 72,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 73,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 74,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 75,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 76,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 77,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 78,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 79,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 80,
    arVal: 4300000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 81,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 82,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 83,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 84,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 85,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 86,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 87,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 88,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 89,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 90,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 91,
    arVal: 27000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 92,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 93,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 94,
    arVal: 37000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 95,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 96,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 97,
    arVal: 50500000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 98,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 41,
    arOva: 99,
    arVal: 60000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 56,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 57,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 58,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 59,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 60,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 61,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 62,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 63,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 64,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 65,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 66,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 67,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 68,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 69,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 70,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 71,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 72,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 73,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 74,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 75,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 76,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 77,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 78,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 79,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 80,
    arVal: 4300000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 81,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 82,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 83,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 84,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 85,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 86,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 87,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 88,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 89,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 90,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 91,
    arVal: 27000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 92,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 93,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 94,
    arVal: 37000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 95,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 96,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 97,
    arVal: 50500000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 98,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 42,
    arOva: 99,
    arVal: 60000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 56,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 57,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 58,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 59,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 60,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 61,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 62,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 63,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 64,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 65,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 66,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 67,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 68,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 69,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 70,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 71,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 72,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 73,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 74,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 75,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 76,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 77,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 78,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 79,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 80,
    arVal: 4300000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 81,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 82,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 83,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 84,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 85,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 86,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 87,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 88,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 89,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 90,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 91,
    arVal: 27000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 92,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 93,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 94,
    arVal: 37000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 95,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 96,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 97,
    arVal: 50500000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 98,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 43,
    arOva: 99,
    arVal: 60000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 56,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 57,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 58,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 59,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 60,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 61,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 62,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 63,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 64,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 65,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 66,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 67,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 68,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 69,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 70,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 71,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 72,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 73,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 74,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 75,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 76,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 77,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 78,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 79,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 80,
    arVal: 4300000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 81,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 82,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 83,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 84,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 85,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 86,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 87,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 88,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 89,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 90,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 91,
    arVal: 27000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 92,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 93,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 94,
    arVal: 37000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 95,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 96,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 97,
    arVal: 50500000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 98,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 44,
    arOva: 99,
    arVal: 60000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 55,
    arVal: 25000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 56,
    arVal: 30000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 57,
    arVal: 35000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 58,
    arVal: 40000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 59,
    arVal: 45000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 60,
    arVal: 50000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 61,
    arVal: 70000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 62,
    arVal: 80000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 63,
    arVal: 100000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 64,
    arVal: 120000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 65,
    arVal: 150000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 66,
    arVal: 180000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 67,
    arVal: 210000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 68,
    arVal: 250000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 69,
    arVal: 275000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 70,
    arVal: 325000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 71,
    arVal: 375000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 72,
    arVal: 475000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 73,
    arVal: 625000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 74,
    arVal: 875000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 75,
    arVal: 1200000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 76,
    arVal: 1500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 77,
    arVal: 2200000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 78,
    arVal: 2900000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 79,
    arVal: 3600000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 80,
    arVal: 4300000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 81,
    arVal: 5500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 82,
    arVal: 6000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 83,
    arVal: 7500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 84,
    arVal: 8500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 85,
    arVal: 11000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 86,
    arVal: 14000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 87,
    arVal: 16500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 88,
    arVal: 18500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 89,
    arVal: 21000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 90,
    arVal: 24500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 91,
    arVal: 27000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 92,
    arVal: 30000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 93,
    arVal: 34000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 94,
    arVal: 37000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 95,
    arVal: 41000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 96,
    arVal: 44000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 97,
    arVal: 50500000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 98,
    arVal: 54000000
  },
  {
    arPos: "CM",
    arAge: 45,
    arOva: 99,
    arVal: 60000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 59,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 61,
    arVal: 230000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 66,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 67,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 68,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 69,
    arVal: 975000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 73,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 74,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 75,
    arVal: 3900000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 77,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 78,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 79,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 80,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 81,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 82,
    arVal: 21500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 83,
    arVal: 25500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 84,
    arVal: 29500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 85,
    arVal: 37500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 86,
    arVal: 47500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 87,
    arVal: 56000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 88,
    arVal: 64000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 89,
    arVal: 72000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 90,
    arVal: 83500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 91,
    arVal: 92000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 92,
    arVal: 103500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 93,
    arVal: 116500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 94,
    arVal: 126500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 95,
    arVal: 139500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 96,
    arVal: 151000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 97,
    arVal: 172000000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 98,
    arVal: 183500000
  },
  {
    arPos: "GK",
    arAge: 15,
    arOva: 99,
    arVal: 205000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 59,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 61,
    arVal: 230000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 66,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 67,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 68,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 69,
    arVal: 975000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 73,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 74,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 75,
    arVal: 3900000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 77,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 78,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 79,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 80,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 81,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 82,
    arVal: 21500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 83,
    arVal: 25500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 84,
    arVal: 29500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 85,
    arVal: 37500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 86,
    arVal: 47500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 87,
    arVal: 56000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 88,
    arVal: 64000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 89,
    arVal: 72000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 90,
    arVal: 83500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 91,
    arVal: 92000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 92,
    arVal: 103500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 93,
    arVal: 116500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 94,
    arVal: 126500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 95,
    arVal: 139500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 96,
    arVal: 151000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 97,
    arVal: 172000000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 98,
    arVal: 183500000
  },
  {
    arPos: "GK",
    arAge: 16,
    arOva: 99,
    arVal: 205000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 59,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 61,
    arVal: 230000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 66,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 67,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 68,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 69,
    arVal: 975000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 73,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 74,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 75,
    arVal: 3900000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 77,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 78,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 79,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 80,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 81,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 82,
    arVal: 21500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 83,
    arVal: 25500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 84,
    arVal: 29500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 85,
    arVal: 37500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 86,
    arVal: 47500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 87,
    arVal: 56000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 88,
    arVal: 64000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 89,
    arVal: 72000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 90,
    arVal: 83500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 91,
    arVal: 92000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 92,
    arVal: 103500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 93,
    arVal: 116500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 94,
    arVal: 126500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 95,
    arVal: 139500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 96,
    arVal: 151000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 97,
    arVal: 172000000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 98,
    arVal: 183500000
  },
  {
    arPos: "GK",
    arAge: 17,
    arOva: 99,
    arVal: 205000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 56,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 57,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 58,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 59,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 60,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 61,
    arVal: 240000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 62,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 63,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 64,
    arVal: 425000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 65,
    arVal: 525000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 66,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 67,
    arVal: 750000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 68,
    arVal: 900000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 69,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 70,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 71,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 72,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 73,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 74,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 75,
    arVal: 4200000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 76,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 77,
    arVal: 8000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 78,
    arVal: 10500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 79,
    arVal: 13000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 80,
    arVal: 15500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 81,
    arVal: 19000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 82,
    arVal: 22500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 83,
    arVal: 27000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 84,
    arVal: 31500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 85,
    arVal: 40000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 86,
    arVal: 50500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 87,
    arVal: 59000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 88,
    arVal: 68000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 89,
    arVal: 76500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 90,
    arVal: 88500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 91,
    arVal: 97500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 92,
    arVal: 109500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 93,
    arVal: 123500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 94,
    arVal: 134000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 95,
    arVal: 148000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 96,
    arVal: 160000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 97,
    arVal: 182500000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 98,
    arVal: 195000000
  },
  {
    arPos: "GK",
    arAge: 18,
    arOva: 99,
    arVal: 217500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 56,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 58,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 61,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 63,
    arVal: 375000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 66,
    arVal: 675000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 67,
    arVal: 800000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 68,
    arVal: 950000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 73,
    arVal: 2400000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 74,
    arVal: 3300000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 75,
    arVal: 4500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 78,
    arVal: 11000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 79,
    arVal: 14000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 80,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 81,
    arVal: 20500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 82,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 83,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 84,
    arVal: 33500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 85,
    arVal: 43000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 86,
    arVal: 54000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 87,
    arVal: 63000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 88,
    arVal: 72500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 89,
    arVal: 82000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 90,
    arVal: 95000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 91,
    arVal: 104000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 92,
    arVal: 117000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 93,
    arVal: 132000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 94,
    arVal: 143000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 95,
    arVal: 158000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 96,
    arVal: 171000000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 97,
    arVal: 195500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 98,
    arVal: 208500000
  },
  {
    arPos: "GK",
    arAge: 19,
    arOva: 99,
    arVal: 232500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 66,
    arVal: 700000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 67,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 74,
    arVal: 3500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 75,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 78,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 79,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 80,
    arVal: 17500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 81,
    arVal: 21500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 82,
    arVal: 25000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 83,
    arVal: 30000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 84,
    arVal: 35000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 85,
    arVal: 44500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 86,
    arVal: 56500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 87,
    arVal: 66000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 88,
    arVal: 75500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 89,
    arVal: 85500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 90,
    arVal: 99000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 91,
    arVal: 108500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 92,
    arVal: 122000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 93,
    arVal: 137500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 94,
    arVal: 149500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 95,
    arVal: 165000000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 96,
    arVal: 178500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 97,
    arVal: 203500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 98,
    arVal: 217500000
  },
  {
    arPos: "GK",
    arAge: 20,
    arOva: 99,
    arVal: 242500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 56,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 58,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 59,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 60,
    arVal: 220000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 63,
    arVal: 425000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 64,
    arVal: 525000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 65,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 66,
    arVal: 750000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 67,
    arVal: 900000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 72,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 73,
    arVal: 2700000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 74,
    arVal: 3700000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 75,
    arVal: 4900000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 77,
    arVal: 9500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 78,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 79,
    arVal: 15500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 80,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 81,
    arVal: 22500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 82,
    arVal: 27000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 83,
    arVal: 32000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 84,
    arVal: 37000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 85,
    arVal: 47500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 86,
    arVal: 59500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 87,
    arVal: 70000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 88,
    arVal: 80500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 89,
    arVal: 90500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 90,
    arVal: 105000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 91,
    arVal: 115500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 92,
    arVal: 130000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 93,
    arVal: 146500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 94,
    arVal: 158500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 95,
    arVal: 175000000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 96,
    arVal: 189500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 97,
    arVal: 216500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 98,
    arVal: 230500000
  },
  {
    arPos: "GK",
    arAge: 21,
    arOva: 99,
    arVal: 257500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 56,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 58,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 59,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 60,
    arVal: 220000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 61,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 63,
    arVal: 425000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 64,
    arVal: 525000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 65,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 66,
    arVal: 750000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 67,
    arVal: 900000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 68,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 72,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 73,
    arVal: 2700000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 74,
    arVal: 3700000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 75,
    arVal: 4900000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 77,
    arVal: 9500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 78,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 79,
    arVal: 15500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 80,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 81,
    arVal: 22500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 82,
    arVal: 27000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 83,
    arVal: 32000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 84,
    arVal: 37000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 85,
    arVal: 47500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 86,
    arVal: 59500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 87,
    arVal: 70000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 88,
    arVal: 80500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 89,
    arVal: 90500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 90,
    arVal: 105000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 91,
    arVal: 115500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 92,
    arVal: 130000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 93,
    arVal: 146500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 94,
    arVal: 158500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 95,
    arVal: 175000000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 96,
    arVal: 189500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 97,
    arVal: 216500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 98,
    arVal: 230500000
  },
  {
    arPos: "GK",
    arAge: 22,
    arOva: 99,
    arVal: 257500000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 82,
    arVal: 26000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 83,
    arVal: 31000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 84,
    arVal: 36000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 85,
    arVal: 46000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 86,
    arVal: 58000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 87,
    arVal: 68000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 88,
    arVal: 78000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 89,
    arVal: 88000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 90,
    arVal: 102000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 91,
    arVal: 112000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 92,
    arVal: 126000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 93,
    arVal: 142000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 94,
    arVal: 154000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 95,
    arVal: 170000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 96,
    arVal: 184000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 97,
    arVal: 210000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 98,
    arVal: 224000000
  },
  {
    arPos: "GK",
    arAge: 23,
    arOva: 99,
    arVal: 250000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 62,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 67,
    arVal: 875000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 70,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 82,
    arVal: 26000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 83,
    arVal: 31000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 84,
    arVal: 36000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 85,
    arVal: 46000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 86,
    arVal: 58000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 87,
    arVal: 68000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 88,
    arVal: 78000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 89,
    arVal: 88000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 90,
    arVal: 102000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 91,
    arVal: 112000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 92,
    arVal: 126000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 93,
    arVal: 142000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 94,
    arVal: 154000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 95,
    arVal: 170000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 96,
    arVal: 184000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 97,
    arVal: 210000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 98,
    arVal: 224000000
  },
  {
    arPos: "GK",
    arAge: 24,
    arOva: 99,
    arVal: 250000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 66,
    arVal: 700000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 67,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 68,
    arVal: 975000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 74,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 75,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 78,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 79,
    arVal: 14000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 80,
    arVal: 17000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 81,
    arVal: 21000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 82,
    arVal: 24500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 83,
    arVal: 29500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 84,
    arVal: 34000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 85,
    arVal: 43500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 86,
    arVal: 55000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 87,
    arVal: 64500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 88,
    arVal: 74000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 89,
    arVal: 83500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 90,
    arVal: 97000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 91,
    arVal: 106500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 92,
    arVal: 119500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 93,
    arVal: 135000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 94,
    arVal: 146500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 95,
    arVal: 161500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 96,
    arVal: 175000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 97,
    arVal: 199500000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 98,
    arVal: 213000000
  },
  {
    arPos: "GK",
    arAge: 25,
    arOva: 99,
    arVal: 237500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 56,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 58,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 61,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 63,
    arVal: 375000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 66,
    arVal: 675000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 67,
    arVal: 800000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 68,
    arVal: 950000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 73,
    arVal: 2400000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 74,
    arVal: 3300000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 75,
    arVal: 4500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 78,
    arVal: 11000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 79,
    arVal: 14000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 80,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 81,
    arVal: 20500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 82,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 83,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 84,
    arVal: 33500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 85,
    arVal: 43000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 86,
    arVal: 54000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 87,
    arVal: 63000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 88,
    arVal: 72500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 89,
    arVal: 82000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 90,
    arVal: 95000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 91,
    arVal: 104000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 92,
    arVal: 117000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 93,
    arVal: 132000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 94,
    arVal: 143000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 95,
    arVal: 158000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 96,
    arVal: 171000000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 97,
    arVal: 195500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 98,
    arVal: 208500000
  },
  {
    arPos: "GK",
    arAge: 26,
    arOva: 99,
    arVal: 232500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 56,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 58,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 59,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 60,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 61,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 62,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 63,
    arVal: 375000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 64,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 65,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 66,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 67,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 68,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 70,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 71,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 72,
    arVal: 1800000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 73,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 74,
    arVal: 3200000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 75,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 77,
    arVal: 8000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 78,
    arVal: 11000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 79,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 80,
    arVal: 16000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 81,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 82,
    arVal: 23500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 83,
    arVal: 28000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 84,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 85,
    arVal: 41500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 86,
    arVal: 52000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 87,
    arVal: 61000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 88,
    arVal: 70000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 89,
    arVal: 79000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 90,
    arVal: 92000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 91,
    arVal: 101000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 92,
    arVal: 113500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 93,
    arVal: 128000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 94,
    arVal: 138500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 95,
    arVal: 153000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 96,
    arVal: 165500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 97,
    arVal: 189000000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 98,
    arVal: 201500000
  },
  {
    arPos: "GK",
    arAge: 27,
    arOva: 99,
    arVal: 225000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 45,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 46,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 47,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 48,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 49,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 50,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 53,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 54,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 57,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 59,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 61,
    arVal: 230000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 63,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 64,
    arVal: 425000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 66,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 67,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 68,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 69,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 72,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 73,
    arVal: 2200000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 74,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 75,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 76,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 77,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 78,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 79,
    arVal: 12500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 80,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 81,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 82,
    arVal: 21500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 83,
    arVal: 25500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 84,
    arVal: 30000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 85,
    arVal: 38000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 86,
    arVal: 48000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 87,
    arVal: 56500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 88,
    arVal: 64500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 89,
    arVal: 73000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 90,
    arVal: 84500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 91,
    arVal: 93000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 92,
    arVal: 104500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 93,
    arVal: 118000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 94,
    arVal: 128000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 95,
    arVal: 141000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 96,
    arVal: 152500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 97,
    arVal: 174500000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 98,
    arVal: 186000000
  },
  {
    arPos: "GK",
    arAge: 28,
    arOva: 99,
    arVal: 207500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 55,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 59,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 60,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 61,
    arVal: 220000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 65,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 66,
    arVal: 575000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 67,
    arVal: 700000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 68,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 69,
    arVal: 950000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 71,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 73,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 74,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 75,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 77,
    arVal: 7000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 78,
    arVal: 9500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 79,
    arVal: 12000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 80,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 81,
    arVal: 17500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 82,
    arVal: 21000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 83,
    arVal: 25000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 84,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 85,
    arVal: 37000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 86,
    arVal: 46500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 87,
    arVal: 54500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 88,
    arVal: 62500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 89,
    arVal: 70500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 90,
    arVal: 81500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 91,
    arVal: 89500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 92,
    arVal: 101000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 93,
    arVal: 113500000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 94,
    arVal: 123000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 95,
    arVal: 136000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 96,
    arVal: 147000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 97,
    arVal: 168000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 98,
    arVal: 179000000
  },
  {
    arPos: "GK",
    arAge: 29,
    arOva: 99,
    arVal: 200000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 51,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 55,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 56,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 57,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 58,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 59,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 60,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 61,
    arVal: 220000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 62,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 63,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 64,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 65,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 66,
    arVal: 575000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 67,
    arVal: 675000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 68,
    arVal: 800000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 69,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 70,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 71,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 72,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 73,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 74,
    arVal: 2800000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 75,
    arVal: 3700000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 76,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 77,
    arVal: 7000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 78,
    arVal: 9500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 79,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 80,
    arVal: 14000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 81,
    arVal: 17000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 82,
    arVal: 20500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 83,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 84,
    arVal: 28000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 85,
    arVal: 36000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 86,
    arVal: 45000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 87,
    arVal: 53000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 88,
    arVal: 61000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 89,
    arVal: 68500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 90,
    arVal: 79500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 91,
    arVal: 87500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 92,
    arVal: 98500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 93,
    arVal: 111000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 94,
    arVal: 120000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 95,
    arVal: 132500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 96,
    arVal: 143500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 97,
    arVal: 164000000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 98,
    arVal: 174500000
  },
  {
    arPos: "GK",
    arAge: 30,
    arOva: 99,
    arVal: 195000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 45,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 46,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 47,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 48,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 49,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 50,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 51,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 52,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 53,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 54,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 55,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 56,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 57,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 58,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 59,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 60,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 61,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 62,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 63,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 64,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 65,
    arVal: 375000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 66,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 67,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 68,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 69,
    arVal: 750000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 70,
    arVal: 850000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 71,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 72,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 73,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 74,
    arVal: 2200000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 75,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 76,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 77,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 78,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 79,
    arVal: 9500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 80,
    arVal: 11000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 81,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 82,
    arVal: 16000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 83,
    arVal: 19000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 84,
    arVal: 22500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 85,
    arVal: 28500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 86,
    arVal: 36000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 87,
    arVal: 42000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 88,
    arVal: 48500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 89,
    arVal: 54500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 90,
    arVal: 63000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 91,
    arVal: 69500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 92,
    arVal: 78000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 93,
    arVal: 88000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 94,
    arVal: 95500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 95,
    arVal: 105500000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 96,
    arVal: 114000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 97,
    arVal: 130000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 98,
    arVal: 139000000
  },
  {
    arPos: "GK",
    arAge: 31,
    arOva: 99,
    arVal: 155000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 45,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 46,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 47,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 48,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 49,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 50,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 51,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 52,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 53,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 54,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 55,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 56,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 57,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 58,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 59,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 60,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 61,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 62,
    arVal: 200000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 63,
    arVal: 240000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 64,
    arVal: 300000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 65,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 66,
    arVal: 425000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 67,
    arVal: 500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 68,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 69,
    arVal: 700000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 70,
    arVal: 800000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 71,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 72,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 73,
    arVal: 1500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 74,
    arVal: 2100000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 75,
    arVal: 2800000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 76,
    arVal: 3700000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 77,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 78,
    arVal: 7000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 79,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 80,
    arVal: 10500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 81,
    arVal: 13000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 82,
    arVal: 15000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 83,
    arVal: 18000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 84,
    arVal: 21000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 85,
    arVal: 26500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 86,
    arVal: 33500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 87,
    arVal: 39500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 88,
    arVal: 45000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 89,
    arVal: 51000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 90,
    arVal: 59000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 91,
    arVal: 65000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 92,
    arVal: 73000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 93,
    arVal: 82500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 94,
    arVal: 89500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 95,
    arVal: 98500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 96,
    arVal: 106500000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 97,
    arVal: 122000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 98,
    arVal: 130000000
  },
  {
    arPos: "GK",
    arAge: 32,
    arOva: 99,
    arVal: 145000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 55,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 56,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 57,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 59,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 62,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 64,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 65,
    arVal: 230000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 66,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 67,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 69,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 70,
    arVal: 525000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 71,
    arVal: 600000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 72,
    arVal: 750000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 75,
    arVal: 1800000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 76,
    arVal: 2400000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 77,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 78,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 79,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 81,
    arVal: 8500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 82,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 83,
    arVal: 12000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 84,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 85,
    arVal: 17500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 86,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 87,
    arVal: 26000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 88,
    arVal: 29500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 89,
    arVal: 33500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 90,
    arVal: 39000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 91,
    arVal: 42500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 92,
    arVal: 48000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 93,
    arVal: 54000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 94,
    arVal: 58500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 95,
    arVal: 64500000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 96,
    arVal: 70000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 97,
    arVal: 80000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 98,
    arVal: 85000000
  },
  {
    arPos: "GK",
    arAge: 33,
    arOva: 99,
    arVal: 95000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 45,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 46,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 47,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 48,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 49,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 50,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 51,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 52,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 53,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 54,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 55,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 56,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 57,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 58,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 59,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 60,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 61,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 62,
    arVal: 70000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 63,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 64,
    arVal: 100000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 65,
    arVal: 120000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 66,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 67,
    arVal: 170000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 68,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 69,
    arVal: 240000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 70,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 71,
    arVal: 325000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 72,
    arVal: 400000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 73,
    arVal: 525000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 74,
    arVal: 725000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 75,
    arVal: 950000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 76,
    arVal: 1300000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 77,
    arVal: 1800000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 78,
    arVal: 2400000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 79,
    arVal: 3000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 80,
    arVal: 3600000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 81,
    arVal: 4400000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 82,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 83,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 84,
    arVal: 7000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 85,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 86,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 87,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 88,
    arVal: 15500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 89,
    arVal: 17500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 90,
    arVal: 20500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 91,
    arVal: 22500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 92,
    arVal: 25000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 93,
    arVal: 28500000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 94,
    arVal: 31000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 95,
    arVal: 34000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 96,
    arVal: 37000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 97,
    arVal: 42000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 98,
    arVal: 45000000
  },
  {
    arPos: "GK",
    arAge: 34,
    arOva: 99,
    arVal: 50000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 45,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 46,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 47,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 48,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 49,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 50,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 51,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 52,
    arVal: 9000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 53,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 54,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 55,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 56,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 57,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 58,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 59,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 60,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 61,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 62,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 63,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 64,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 65,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 66,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 67,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 68,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 69,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 70,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 71,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 72,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 73,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 74,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 75,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 76,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 77,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 78,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 79,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 80,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 81,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 82,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 83,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 84,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 85,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 86,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 87,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 88,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 89,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 90,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 91,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 92,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 93,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 94,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 95,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 96,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 97,
    arVal: 27500000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 98,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 35,
    arOva: 99,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 45,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 46,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 47,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 48,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 49,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 50,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 51,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 52,
    arVal: 9000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 53,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 54,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 55,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 56,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 57,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 58,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 59,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 60,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 61,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 62,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 63,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 64,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 65,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 66,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 67,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 68,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 69,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 70,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 71,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 72,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 73,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 74,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 75,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 76,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 77,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 78,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 79,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 80,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 81,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 82,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 83,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 84,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 85,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 86,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 87,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 88,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 89,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 90,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 91,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 92,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 93,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 94,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 95,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 96,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 97,
    arVal: 27500000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 98,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 36,
    arOva: 99,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 45,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 46,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 47,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 48,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 49,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 50,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 51,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 52,
    arVal: 9000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 53,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 54,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 55,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 56,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 57,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 58,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 59,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 60,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 61,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 62,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 63,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 64,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 65,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 66,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 67,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 68,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 69,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 70,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 71,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 72,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 73,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 74,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 75,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 76,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 77,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 78,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 79,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 80,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 81,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 82,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 83,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 84,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 85,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 86,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 87,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 88,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 89,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 90,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 91,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 92,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 93,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 94,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 95,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 96,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 97,
    arVal: 27500000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 98,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 37,
    arOva: 99,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 45,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 46,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 47,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 48,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 49,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 50,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 51,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 52,
    arVal: 9000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 53,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 54,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 55,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 56,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 57,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 58,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 59,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 60,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 61,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 62,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 63,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 64,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 65,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 66,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 67,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 68,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 69,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 70,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 71,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 72,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 73,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 74,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 75,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 76,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 77,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 78,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 79,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 80,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 81,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 82,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 83,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 84,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 85,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 86,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 87,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 88,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 89,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 90,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 91,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 92,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 93,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 94,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 95,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 96,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 97,
    arVal: 27500000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 98,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 38,
    arOva: 99,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 45,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 46,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 47,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 48,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 49,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 50,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 51,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 52,
    arVal: 9000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 53,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 54,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 55,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 56,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 57,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 58,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 59,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 60,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 61,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 62,
    arVal: 45000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 63,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 64,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 65,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 66,
    arVal: 90000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 67,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 68,
    arVal: 130000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 69,
    arVal: 150000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 70,
    arVal: 180000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 71,
    arVal: 210000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 72,
    arVal: 250000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 73,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 74,
    arVal: 475000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 75,
    arVal: 625000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 76,
    arVal: 825000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 77,
    arVal: 1200000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 78,
    arVal: 1600000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 79,
    arVal: 1900000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 80,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 81,
    arVal: 2900000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 82,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 83,
    arVal: 4000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 84,
    arVal: 4700000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 85,
    arVal: 6000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 86,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 87,
    arVal: 9000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 88,
    arVal: 10000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 89,
    arVal: 11500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 90,
    arVal: 13500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 91,
    arVal: 14500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 92,
    arVal: 16500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 93,
    arVal: 18500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 94,
    arVal: 20000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 95,
    arVal: 22000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 96,
    arVal: 24000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 97,
    arVal: 27500000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 98,
    arVal: 29000000
  },
  {
    arPos: "GK",
    arAge: 39,
    arOva: 99,
    arVal: 32500000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 40,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 41,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 42,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 43,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 44,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 45,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 46,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 47,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 48,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 49,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 50,
    arVal: 1200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 51,
    arVal: 1500
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 52,
    arVal: 2100
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 53,
    arVal: 2400
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 54,
    arVal: 2800
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 55,
    arVal: 3300
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 56,
    arVal: 3700
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 57,
    arVal: 4200
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 58,
    arVal: 5000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 59,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 60,
    arVal: 6000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 61,
    arVal: 8000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 62,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 63,
    arVal: 10000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 64,
    arVal: 15000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 65,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 66,
    arVal: 20000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 67,
    arVal: 25000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 68,
    arVal: 30000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 69,
    arVal: 35000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 70,
    arVal: 40000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 71,
    arVal: 50000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 72,
    arVal: 60000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 73,
    arVal: 80000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 74,
    arVal: 110000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 75,
    arVal: 140000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 76,
    arVal: 190000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 77,
    arVal: 275000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 78,
    arVal: 350000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 79,
    arVal: 450000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 80,
    arVal: 550000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 81,
    arVal: 650000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 82,
    arVal: 775000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 83,
    arVal: 925000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 84,
    arVal: 1100000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 85,
    arVal: 1400000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 86,
    arVal: 1700000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 87,
    arVal: 2000000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 88,
    arVal: 2300000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 89,
    arVal: 2600000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 90,
    arVal: 3100000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 91,
    arVal: 3400000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 92,
    arVal: 3800000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 93,
    arVal: 4300000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 94,
    arVal: 4600000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 95,
    arVal: 5000000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 96,
    arVal: 5500000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 97,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 98,
    arVal: 6500000
  },
  {
    arPos: "GK",
    arAge: 45,
    arOva: 99,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 74,
    arVal: 4300000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 80,
    arVal: 21500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 81,
    arVal: 26000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 82,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 83,
    arVal: 37000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 84,
    arVal: 43000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 85,
    arVal: 54500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 86,
    arVal: 69000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 87,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 88,
    arVal: 93000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 89,
    arVal: 104500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 90,
    arVal: 121500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 91,
    arVal: 133500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 92,
    arVal: 150000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 93,
    arVal: 169000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 94,
    arVal: 183500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 95,
    arVal: 202500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 96,
    arVal: 219000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 97,
    arVal: 250000000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 98,
    arVal: 266500000
  },
  {
    arPos: "ST",
    arAge: 15,
    arOva: 99,
    arVal: 297500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 74,
    arVal: 4300000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 80,
    arVal: 21500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 81,
    arVal: 26000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 82,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 83,
    arVal: 37000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 84,
    arVal: 43000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 85,
    arVal: 54500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 86,
    arVal: 69000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 87,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 88,
    arVal: 93000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 89,
    arVal: 104500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 90,
    arVal: 121500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 91,
    arVal: 133500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 92,
    arVal: 150000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 93,
    arVal: 169000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 94,
    arVal: 183500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 95,
    arVal: 202500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 96,
    arVal: 219000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 97,
    arVal: 250000000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 98,
    arVal: 266500000
  },
  {
    arPos: "ST",
    arAge: 16,
    arOva: 99,
    arVal: 297500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 74,
    arVal: 4300000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 80,
    arVal: 21500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 81,
    arVal: 26000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 82,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 83,
    arVal: 37000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 84,
    arVal: 43000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 85,
    arVal: 54500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 86,
    arVal: 69000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 87,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 88,
    arVal: 93000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 89,
    arVal: 104500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 90,
    arVal: 121500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 91,
    arVal: 133500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 92,
    arVal: 150000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 93,
    arVal: 169000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 94,
    arVal: 183500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 95,
    arVal: 202500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 96,
    arVal: 219000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 97,
    arVal: 250000000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 98,
    arVal: 266500000
  },
  {
    arPos: "ST",
    arAge: 17,
    arOva: 99,
    arVal: 297500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 59,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 62,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 64,
    arVal: 625000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 65,
    arVal: 750000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 66,
    arVal: 900000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 70,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 71,
    arVal: 2000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 72,
    arVal: 2500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 73,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 74,
    arVal: 4500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 76,
    arVal: 8000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 78,
    arVal: 15000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 79,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 80,
    arVal: 22500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 81,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 82,
    arVal: 32000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 83,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 84,
    arVal: 44500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 85,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 86,
    arVal: 72000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 87,
    arVal: 84500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 88,
    arVal: 96500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 89,
    arVal: 109000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 90,
    arVal: 126500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 91,
    arVal: 139000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 92,
    arVal: 156000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 93,
    arVal: 176000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 94,
    arVal: 191000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 95,
    arVal: 211000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 96,
    arVal: 228000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 97,
    arVal: 260500000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 98,
    arVal: 278000000
  },
  {
    arPos: "ST",
    arAge: 18,
    arOva: 99,
    arVal: 310000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 64,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 65,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 66,
    arVal: 950000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 72,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 73,
    arVal: 3400000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 74,
    arVal: 4700000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 78,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 79,
    arVal: 19500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 80,
    arVal: 23500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 81,
    arVal: 28500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 82,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 83,
    arVal: 40500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 84,
    arVal: 47000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 85,
    arVal: 60000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 86,
    arVal: 75500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 87,
    arVal: 88500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 88,
    arVal: 101500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 89,
    arVal: 114500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 90,
    arVal: 132500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 91,
    arVal: 145500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 92,
    arVal: 164000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 93,
    arVal: 184500000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 94,
    arVal: 200000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 95,
    arVal: 221000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 96,
    arVal: 239000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 97,
    arVal: 273000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 98,
    arVal: 291000000
  },
  {
    arPos: "ST",
    arAge: 19,
    arOva: 99,
    arVal: 325000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 66,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 73,
    arVal: 3500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 74,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 77,
    arVal: 12000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 78,
    arVal: 16000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 79,
    arVal: 20000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 80,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 81,
    arVal: 29500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 82,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 83,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 84,
    arVal: 48000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 85,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 86,
    arVal: 77500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 87,
    arVal: 91000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 88,
    arVal: 104500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 89,
    arVal: 118000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 90,
    arVal: 136500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 91,
    arVal: 150000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 92,
    arVal: 169000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 93,
    arVal: 190500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 94,
    arVal: 206500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 95,
    arVal: 228000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 96,
    arVal: 246500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 97,
    arVal: 281500000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 98,
    arVal: 300000000
  },
  {
    arPos: "ST",
    arAge: 20,
    arOva: 99,
    arVal: 335000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 45,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 46,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 47,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 48,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 49,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 50,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 52,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 57,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 61,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 63,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 64,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 65,
    arVal: 850000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 69,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 72,
    arVal: 2800000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 74,
    arVal: 5000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 78,
    arVal: 17000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 79,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 80,
    arVal: 25000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 81,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 82,
    arVal: 36500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 83,
    arVal: 43500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 84,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 85,
    arVal: 64500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 86,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 87,
    arVal: 95000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 88,
    arVal: 109000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 89,
    arVal: 123000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 90,
    arVal: 143000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 91,
    arVal: 157000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 92,
    arVal: 176500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 93,
    arVal: 199000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 94,
    arVal: 215500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 95,
    arVal: 238000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 96,
    arVal: 257500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 97,
    arVal: 294000000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 98,
    arVal: 313500000
  },
  {
    arPos: "ST",
    arAge: 21,
    arOva: 99,
    arVal: 350000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 45,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 46,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 47,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 48,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 49,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 50,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 52,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 57,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 61,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 63,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 64,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 65,
    arVal: 850000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 69,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 72,
    arVal: 2800000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 74,
    arVal: 5000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 78,
    arVal: 17000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 79,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 80,
    arVal: 25000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 81,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 82,
    arVal: 36500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 83,
    arVal: 43500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 84,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 85,
    arVal: 64500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 86,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 87,
    arVal: 95000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 88,
    arVal: 109000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 89,
    arVal: 123000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 90,
    arVal: 143000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 91,
    arVal: 157000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 92,
    arVal: 176500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 93,
    arVal: 199000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 94,
    arVal: 215500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 95,
    arVal: 238000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 96,
    arVal: 257500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 97,
    arVal: 294000000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 98,
    arVal: 313500000
  },
  {
    arPos: "ST",
    arAge: 22,
    arOva: 99,
    arVal: 350000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 74,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 78,
    arVal: 16500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 79,
    arVal: 20500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 80,
    arVal: 24500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 81,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 82,
    arVal: 35500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 83,
    arVal: 42500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 84,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 85,
    arVal: 63000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 86,
    arVal: 79500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 87,
    arVal: 93000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 88,
    arVal: 107000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 89,
    arVal: 120500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 90,
    arVal: 139500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 91,
    arVal: 153500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 92,
    arVal: 172500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 93,
    arVal: 194500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 94,
    arVal: 211000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 95,
    arVal: 233000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 96,
    arVal: 252000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 97,
    arVal: 287500000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 98,
    arVal: 307000000
  },
  {
    arPos: "ST",
    arAge: 23,
    arOva: 99,
    arVal: 342500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 54,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 55,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 56,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 57,
    arVal: 190000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 58,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 59,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 60,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 62,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 64,
    arVal: 675000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 65,
    arVal: 825000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 66,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 67,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 70,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 71,
    arVal: 2200000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 72,
    arVal: 2700000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 73,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 74,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 76,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 77,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 78,
    arVal: 16500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 79,
    arVal: 20500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 80,
    arVal: 24500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 81,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 82,
    arVal: 35500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 83,
    arVal: 42500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 84,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 85,
    arVal: 63000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 86,
    arVal: 79500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 87,
    arVal: 93000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 88,
    arVal: 107000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 89,
    arVal: 120500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 90,
    arVal: 139500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 91,
    arVal: 153500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 92,
    arVal: 172500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 93,
    arVal: 194500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 94,
    arVal: 211000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 95,
    arVal: 233000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 96,
    arVal: 252000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 97,
    arVal: 287500000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 98,
    arVal: 307000000
  },
  {
    arPos: "ST",
    arAge: 24,
    arOva: 99,
    arVal: 342500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 51,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 53,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 63,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 64,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 65,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 66,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 68,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 69,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 72,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 73,
    arVal: 3400000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 74,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 75,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 77,
    arVal: 12000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 78,
    arVal: 16000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 79,
    arVal: 20000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 80,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 81,
    arVal: 29000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 82,
    arVal: 34500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 83,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 84,
    arVal: 47500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 85,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 86,
    arVal: 76500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 87,
    arVal: 90000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 88,
    arVal: 103000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 89,
    arVal: 116000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 90,
    arVal: 134500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 91,
    arVal: 148000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 92,
    arVal: 166500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 93,
    arVal: 187500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 94,
    arVal: 203500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 95,
    arVal: 224500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 96,
    arVal: 243000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 97,
    arVal: 277000000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 98,
    arVal: 295500000
  },
  {
    arPos: "ST",
    arAge: 25,
    arOva: 99,
    arVal: 330000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 56,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 58,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 59,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 61,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 62,
    arVal: 450000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 64,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 65,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 66,
    arVal: 950000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 70,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 71,
    arVal: 2100000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 72,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 73,
    arVal: 3400000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 74,
    arVal: 4700000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 76,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 78,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 79,
    arVal: 19500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 80,
    arVal: 23500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 81,
    arVal: 28500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 82,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 83,
    arVal: 40500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 84,
    arVal: 47000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 85,
    arVal: 60000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 86,
    arVal: 75500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 87,
    arVal: 88500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 88,
    arVal: 101500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 89,
    arVal: 114500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 90,
    arVal: 132500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 91,
    arVal: 145500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 92,
    arVal: 164000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 93,
    arVal: 184500000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 94,
    arVal: 200000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 95,
    arVal: 221000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 96,
    arVal: 239000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 97,
    arVal: 273000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 98,
    arVal: 291000000
  },
  {
    arPos: "ST",
    arAge: 26,
    arOva: 99,
    arVal: 325000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 52,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 54,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 55,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 57,
    arVal: 180000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 58,
    arVal: 220000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 59,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 60,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 61,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 62,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 63,
    arVal: 525000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 64,
    arVal: 625000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 65,
    arVal: 775000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 66,
    arVal: 925000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 67,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 68,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 69,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 70,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 71,
    arVal: 2000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 72,
    arVal: 2500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 73,
    arVal: 3300000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 74,
    arVal: 4600000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 76,
    arVal: 8000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 77,
    arVal: 11500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 78,
    arVal: 15000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 79,
    arVal: 19000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 80,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 81,
    arVal: 28000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 82,
    arVal: 33000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 83,
    arVal: 39500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 84,
    arVal: 45500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 85,
    arVal: 58500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 86,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 87,
    arVal: 86500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 88,
    arVal: 99000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 89,
    arVal: 112000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 90,
    arVal: 129500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 91,
    arVal: 142000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 92,
    arVal: 160000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 93,
    arVal: 180500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 94,
    arVal: 195500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 95,
    arVal: 216000000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 96,
    arVal: 233500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 97,
    arVal: 266500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 98,
    arVal: 284500000
  },
  {
    arPos: "ST",
    arAge: 27,
    arOva: 99,
    arVal: 317500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 45,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 46,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 47,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 48,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 49,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 50,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 53,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 56,
    arVal: 150000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 57,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 58,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 59,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 63,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 64,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 66,
    arVal: 875000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 72,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 73,
    arVal: 3100000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 74,
    arVal: 4300000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 75,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 77,
    arVal: 11000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 78,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 79,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 80,
    arVal: 21500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 81,
    arVal: 26500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 82,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 83,
    arVal: 37000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 84,
    arVal: 43000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 85,
    arVal: 55000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 86,
    arVal: 69500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 87,
    arVal: 81500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 88,
    arVal: 93500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 89,
    arVal: 105500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 90,
    arVal: 122500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 91,
    arVal: 134500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 92,
    arVal: 151000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 93,
    arVal: 170500000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 94,
    arVal: 185000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 95,
    arVal: 204000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 96,
    arVal: 221000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 97,
    arVal: 252000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 98,
    arVal: 269000000
  },
  {
    arPos: "ST",
    arAge: 28,
    arOva: 99,
    arVal: 300000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 55,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 60,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 65,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 71,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 74,
    arVal: 4200000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 79,
    arVal: 17500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 80,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 82,
    arVal: 30500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 83,
    arVal: 36500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 84,
    arVal: 42000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 85,
    arVal: 54000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 86,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 87,
    arVal: 79500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 88,
    arVal: 91500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 89,
    arVal: 103000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 90,
    arVal: 119500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 91,
    arVal: 131000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 92,
    arVal: 147500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 93,
    arVal: 166000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 94,
    arVal: 180000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 95,
    arVal: 199000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 96,
    arVal: 215500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 97,
    arVal: 245500000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 98,
    arVal: 262000000
  },
  {
    arPos: "ST",
    arAge: 29,
    arOva: 99,
    arVal: 292500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 45,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 46,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 47,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 48,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 49,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 50,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 51,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 52,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 53,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 54,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 55,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 56,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 57,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 58,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 59,
    arVal: 220000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 60,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 61,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 62,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 63,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 64,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 65,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 66,
    arVal: 850000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 67,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 68,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 69,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 70,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 71,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 72,
    arVal: 2300000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 73,
    arVal: 3000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 74,
    arVal: 4099999.9999999995
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 75,
    arVal: 5500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 76,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 77,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 78,
    arVal: 14000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 79,
    arVal: 17000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 80,
    arVal: 20500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 81,
    arVal: 25500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 82,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 83,
    arVal: 35500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 84,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 85,
    arVal: 53000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 86,
    arVal: 66500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 87,
    arVal: 78000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 88,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 89,
    arVal: 101000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 90,
    arVal: 117500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 91,
    arVal: 129000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 92,
    arVal: 145000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 93,
    arVal: 163500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 94,
    arVal: 177000000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 95,
    arVal: 195500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 96,
    arVal: 211500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 97,
    arVal: 241500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 98,
    arVal: 257500000
  },
  {
    arPos: "ST",
    arAge: 30,
    arOva: 99,
    arVal: 287500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 51,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 52,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 55,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 57,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 59,
    arVal: 190000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 60,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 64,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 65,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 66,
    arVal: 725000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 67,
    arVal: 850000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 68,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 69,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 71,
    arVal: 1600000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 72,
    arVal: 2000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 73,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 74,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 75,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 76,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 77,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 78,
    arVal: 12000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 79,
    arVal: 15000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 80,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 81,
    arVal: 22000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 82,
    arVal: 25500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 83,
    arVal: 30500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 84,
    arVal: 35500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 85,
    arVal: 45500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 86,
    arVal: 57500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 87,
    arVal: 67500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 88,
    arVal: 77000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 89,
    arVal: 87000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 90,
    arVal: 101000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 91,
    arVal: 111000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 92,
    arVal: 124500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 93,
    arVal: 140500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 94,
    arVal: 152500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 95,
    arVal: 168500000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 96,
    arVal: 182000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 97,
    arVal: 208000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 98,
    arVal: 222000000
  },
  {
    arPos: "ST",
    arAge: 31,
    arOva: 99,
    arVal: 247500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 45,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 46,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 47,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 48,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 49,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 50,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 51,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 52,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 53,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 54,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 55,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 56,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 57,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 58,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 59,
    arVal: 180000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 60,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 61,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 62,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 63,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 64,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 65,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 66,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 67,
    arVal: 825000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 68,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 69,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 70,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 71,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 72,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 73,
    arVal: 2500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 74,
    arVal: 3400000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 75,
    arVal: 4600000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 76,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 77,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 78,
    arVal: 11500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 79,
    arVal: 14000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 80,
    arVal: 17000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 81,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 82,
    arVal: 24500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 83,
    arVal: 29500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 84,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 85,
    arVal: 43500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 86,
    arVal: 55000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 87,
    arVal: 64500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 88,
    arVal: 74000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 89,
    arVal: 83500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 90,
    arVal: 97000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 91,
    arVal: 106500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 92,
    arVal: 119500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 93,
    arVal: 135000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 94,
    arVal: 146500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 95,
    arVal: 161500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 96,
    arVal: 175000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 97,
    arVal: 199500000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 98,
    arVal: 213000000
  },
  {
    arPos: "ST",
    arAge: 32,
    arOva: 99,
    arVal: 237500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 45,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 46,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 47,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 48,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 49,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 50,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 51,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 52,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 53,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 54,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 55,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 56,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 57,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 58,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 59,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 60,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 61,
    arVal: 210000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 62,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 63,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 64,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 65,
    arVal: 450000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 66,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 67,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 68,
    arVal: 775000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 69,
    arVal: 900000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 70,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 71,
    arVal: 1200000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 72,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 73,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 74,
    arVal: 2700000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 75,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 76,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 77,
    arVal: 6500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 78,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 79,
    arVal: 11000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 80,
    arVal: 13500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 81,
    arVal: 16500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 82,
    arVal: 19500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 83,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 84,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 85,
    arVal: 34500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 86,
    arVal: 43500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 87,
    arVal: 51000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 88,
    arVal: 58500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 89,
    arVal: 66000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 90,
    arVal: 76500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 91,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 92,
    arVal: 94500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 93,
    arVal: 106500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 94,
    arVal: 115500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 95,
    arVal: 127500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 96,
    arVal: 138000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 97,
    arVal: 157500000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 98,
    arVal: 168000000
  },
  {
    arPos: "ST",
    arAge: 33,
    arOva: 99,
    arVal: 187500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 45,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 46,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 47,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 48,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 49,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 50,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 51,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 52,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 53,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 54,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 55,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 56,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 57,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 58,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 59,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 60,
    arVal: 120000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 61,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 62,
    arVal: 190000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 63,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 64,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 65,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 66,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 67,
    arVal: 500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 68,
    arVal: 575000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 69,
    arVal: 675000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 70,
    arVal: 775000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 71,
    arVal: 900000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 72,
    arVal: 1100000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 73,
    arVal: 1500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 74,
    arVal: 2100000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 75,
    arVal: 2700000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 76,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 77,
    arVal: 5000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 78,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 79,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 80,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 81,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 82,
    arVal: 15000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 83,
    arVal: 17500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 84,
    arVal: 20500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 85,
    arVal: 26000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 86,
    arVal: 33000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 87,
    arVal: 39000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 88,
    arVal: 44500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 89,
    arVal: 50000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 90,
    arVal: 58000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 91,
    arVal: 64000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 92,
    arVal: 72000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 93,
    arVal: 81000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 94,
    arVal: 88000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 95,
    arVal: 97000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 96,
    arVal: 105000000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 97,
    arVal: 119500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 98,
    arVal: 127500000
  },
  {
    arPos: "ST",
    arAge: 34,
    arOva: 99,
    arVal: 142500000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 45,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 46,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 47,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 48,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 49,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 50,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 51,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 52,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 53,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 54,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 55,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 56,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 57,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 58,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 59,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 60,
    arVal: 100000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 61,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 62,
    arVal: 170000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 63,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 64,
    arVal: 250000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 65,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 66,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 67,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 68,
    arVal: 525000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 69,
    arVal: 600000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 70,
    arVal: 675000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 71,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 72,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 73,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 74,
    arVal: 1800000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 75,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 76,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 77,
    arVal: 4500000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 78,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 79,
    arVal: 7500000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 80,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 81,
    arVal: 11000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 82,
    arVal: 13000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 83,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 84,
    arVal: 18000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 85,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 86,
    arVal: 29000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 87,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 88,
    arVal: 39000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 89,
    arVal: 44000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 90,
    arVal: 51000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 91,
    arVal: 56000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 92,
    arVal: 63000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 93,
    arVal: 71000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 94,
    arVal: 77000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 95,
    arVal: 85000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 96,
    arVal: 92000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 97,
    arVal: 105000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 98,
    arVal: 112000000
  },
  {
    arPos: "ST",
    arAge: 35,
    arOva: 99,
    arVal: 125000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 55,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 56,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 57,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 59,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 62,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 64,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 65,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 66,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 67,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 69,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 70,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 71,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 72,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 75,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 76,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 77,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 78,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 79,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 81,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 82,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 83,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 84,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 85,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 86,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 87,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 88,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 89,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 90,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 91,
    arVal: 45000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 92,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 93,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 94,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 95,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 96,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 97,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 98,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 36,
    arOva: 99,
    arVal: 100000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 55,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 56,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 57,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 59,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 62,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 64,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 65,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 66,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 67,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 69,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 70,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 71,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 72,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 75,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 76,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 77,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 78,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 79,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 81,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 82,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 83,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 84,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 85,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 86,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 87,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 88,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 89,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 90,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 91,
    arVal: 45000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 92,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 93,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 94,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 95,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 96,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 97,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 98,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 37,
    arOva: 99,
    arVal: 100000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 55,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 56,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 57,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 59,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 62,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 64,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 65,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 66,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 67,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 69,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 70,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 71,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 72,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 75,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 76,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 77,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 78,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 79,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 81,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 82,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 83,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 84,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 85,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 86,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 87,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 88,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 89,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 90,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 91,
    arVal: 45000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 92,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 93,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 94,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 95,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 96,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 97,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 98,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 38,
    arOva: 99,
    arVal: 100000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 55,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 56,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 57,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 59,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 62,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 64,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 65,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 66,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 67,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 69,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 70,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 71,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 72,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 75,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 76,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 77,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 78,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 79,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 81,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 82,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 83,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 84,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 85,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 86,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 87,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 88,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 89,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 90,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 91,
    arVal: 45000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 92,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 93,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 94,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 95,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 96,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 97,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 98,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 39,
    arOva: 99,
    arVal: 100000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 45,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 46,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 47,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 48,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 49,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 50,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 51,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 52,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 53,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 54,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 55,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 56,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 57,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 58,
    arVal: 70000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 59,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 60,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 61,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 62,
    arVal: 140000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 63,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 64,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 65,
    arVal: 240000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 66,
    arVal: 300000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 67,
    arVal: 350000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 68,
    arVal: 400000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 69,
    arVal: 475000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 70,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 71,
    arVal: 650000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 72,
    arVal: 800000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 73,
    arVal: 1000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 74,
    arVal: 1400000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 75,
    arVal: 1900000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 76,
    arVal: 2600000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 77,
    arVal: 3600000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 78,
    arVal: 4800000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 79,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 80,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 81,
    arVal: 9000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 82,
    arVal: 10500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 83,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 84,
    arVal: 14500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 85,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 86,
    arVal: 23000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 87,
    arVal: 27000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 88,
    arVal: 31000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 89,
    arVal: 35000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 90,
    arVal: 41000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 91,
    arVal: 45000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 92,
    arVal: 50500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 93,
    arVal: 57000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 94,
    arVal: 61500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 95,
    arVal: 68000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 96,
    arVal: 73500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 97,
    arVal: 84000000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 98,
    arVal: 89500000
  },
  {
    arPos: "ST",
    arAge: 40,
    arOva: 99,
    arVal: 100000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 54,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 55,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 56,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 57,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 58,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 59,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 60,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 61,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 62,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 63,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 64,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 65,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 66,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 67,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 68,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 69,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 70,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 71,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 72,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 73,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 74,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 75,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 76,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 77,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 78,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 79,
    arVal: 4000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 80,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 81,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 82,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 83,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 84,
    arVal: 9500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 85,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 86,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 87,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 88,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 89,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 90,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 91,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 92,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 93,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 94,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 95,
    arVal: 46000000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 96,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 97,
    arVal: 56500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 98,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 41,
    arOva: 99,
    arVal: 67500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 54,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 55,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 56,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 57,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 58,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 59,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 60,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 61,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 62,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 63,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 64,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 65,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 66,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 67,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 68,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 69,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 70,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 71,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 72,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 73,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 74,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 75,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 76,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 77,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 78,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 79,
    arVal: 4000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 80,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 81,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 82,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 83,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 84,
    arVal: 9500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 85,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 86,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 87,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 88,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 89,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 90,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 91,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 92,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 93,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 94,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 95,
    arVal: 46000000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 96,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 97,
    arVal: 56500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 98,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 42,
    arOva: 99,
    arVal: 67500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 54,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 55,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 56,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 57,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 58,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 59,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 60,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 61,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 62,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 63,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 64,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 65,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 66,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 67,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 68,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 69,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 70,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 71,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 72,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 73,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 74,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 75,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 76,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 77,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 78,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 79,
    arVal: 4000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 80,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 81,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 82,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 83,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 84,
    arVal: 9500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 85,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 86,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 87,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 88,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 89,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 90,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 91,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 92,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 93,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 94,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 95,
    arVal: 46000000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 96,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 97,
    arVal: 56500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 98,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 43,
    arOva: 99,
    arVal: 67500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 54,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 55,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 56,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 57,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 58,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 59,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 60,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 61,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 62,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 63,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 64,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 65,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 66,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 67,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 68,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 69,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 70,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 71,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 72,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 73,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 74,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 75,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 76,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 77,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 78,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 79,
    arVal: 4000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 80,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 81,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 82,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 83,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 84,
    arVal: 9500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 85,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 86,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 87,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 88,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 89,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 90,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 91,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 92,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 93,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 94,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 95,
    arVal: 46000000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 96,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 97,
    arVal: 56500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 98,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 44,
    arOva: 99,
    arVal: 67500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 45,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 46,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 47,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 48,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 49,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 50,
    arVal: 10000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 51,
    arVal: 15000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 52,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 53,
    arVal: 20000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 54,
    arVal: 25000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 55,
    arVal: 30000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 56,
    arVal: 35000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 57,
    arVal: 40000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 58,
    arVal: 45000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 59,
    arVal: 50000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 60,
    arVal: 60000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 61,
    arVal: 80000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 62,
    arVal: 90000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 63,
    arVal: 110000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 64,
    arVal: 130000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 65,
    arVal: 160000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 66,
    arVal: 200000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 67,
    arVal: 230000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 68,
    arVal: 275000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 69,
    arVal: 325000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 70,
    arVal: 375000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 71,
    arVal: 425000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 72,
    arVal: 550000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 73,
    arVal: 700000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 74,
    arVal: 975000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 75,
    arVal: 1300000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 76,
    arVal: 1700000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 77,
    arVal: 2400000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 78,
    arVal: 3200000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 79,
    arVal: 4000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 80,
    arVal: 4900000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 81,
    arVal: 6000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 82,
    arVal: 7000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 83,
    arVal: 8500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 84,
    arVal: 9500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 85,
    arVal: 12500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 86,
    arVal: 15500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 87,
    arVal: 18500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 88,
    arVal: 21000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 89,
    arVal: 24000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 90,
    arVal: 27500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 91,
    arVal: 30000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 92,
    arVal: 34000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 93,
    arVal: 38500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 94,
    arVal: 41500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 95,
    arVal: 46000000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 96,
    arVal: 49500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 97,
    arVal: 56500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 98,
    arVal: 60500000
  },
  {
    arPos: "ST",
    arAge: 45,
    arOva: 99,
    arVal: 67500000
  }
];

    var rowCount = document.querySelector("#yw1 > table").rows.length;

    const tableLoc = document.querySelector("#yw1 > table > thead > tr");
    let tablehead = "<th><center>PES Overall</center></th>";
    tableLoc.insertAdjacentHTML("beforeend", tablehead);

    var colCount = document.querySelector("#yw1 > table > tbody").rows[0].cells.length;

    for (var i = 1; i < rowCount; i++) {
        const cellLoc = document.querySelector("#yw1 > table > tbody > tr:nth-child("+i+")");
        var ammountPrim = "";try{ammountPrim = document.querySelector("#yw1 > table > tbody > tr:nth-child("+i+") > td:nth-child("+colCount+") > a").text}catch(err){ammountPrim="00.000"};
        var ammountClear = ammountPrim.substring(1, ammountPrim.length-1);
        var strMult = ammountPrim.substring(ammountPrim.length-1, ammountPrim.length);
        var ammountMulti = 0;if(strMult=="m"){ammountMulti=1000000}else{ammountMulti=1000};

        var birth = document.querySelector("#yw1 > table > tbody > tr:nth-child("+i+") > td.zentriert:nth-child("+(colCount-2)+")").textContent.split("(");
        var age ="";
        if (birth[0].length ==2){age = birth[0].substring(0,2);}
        else{age = birth[1].substring(0,2);}
        //if (age==""){birth = document.querySelector("#yw1 > table > tbody > tr:nth-child("+i+") > td.zentriert:nth-child("+(colCount-3)+")").textContent.split("(");age = birth[1].substring(0,2);}

        var position = document.querySelector("#yw1 > table > tbody > tr:nth-child("+i+") > td:nth-child(1)").getAttribute("class");
        var realPosition = "";if (position=="zentriert rueckennummer bg_Torwart"){realPosition="GK"};if (position=="zentriert rueckennummer bg_Abwehr"){realPosition="CB"};if (position=="zentriert rueckennummer bg_Mittelfeld"){realPosition="CM"};if (position=="zentriert rueckennummer bg_Sturm"){realPosition="ST"};
        var realValue = parseFloat(ammountClear) * ammountMulti;
        var realAge = parseFloat(age);
        var realOva = 55;
        if(realValue != 0){
            for(var j = 0; j < 6819;j++){
                if(realPosition==arrCalculator[j].arPos && realAge==arrCalculator[j].arAge && realValue >= arrCalculator[j].arVal){
                    realOva = arrCalculator[j].arOva;
                }
            }
        }
        else{realOva=45}

        var pesOva = 0;
        pesOva = Math.round(((realOva-45)/50)*49+50);
        pesOva = Math.round(pesOva);
        var strColor = "";
        if (pesOva>=95){strColor="style='background-color:red;color:white'";}
        if (pesOva>=90 && pesOva<95){strColor="style='background-color:orange'";}
        if (pesOva>=85 && pesOva<90){strColor="style='background-color:#ffe300'";}
        if (pesOva>=80 && pesOva<85){strColor="style='background-color:yellow'";}
        if (pesOva>=75 && pesOva<80){strColor="style='background-color:greenyellow'";}
        if (pesOva>=70 && pesOva<75){strColor="style='background-color:#adff2f96'";}
        if (pesOva>=65 && pesOva<70){strColor="style='background-color:#adff2f26'";}
        let cellCont = "<td "+strColor+"><center><b>"+pesOva+"</b></center></td>";
        cellLoc.insertAdjacentHTML("beforeend", cellCont);

    }


})();