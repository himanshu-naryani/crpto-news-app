export function currencyConversion(num, selectedFiat) {
  switch (selectedFiat) {
    case "AUD": {
      num = num * 1.3522642999413745;
      break;
    }
    case "BGN": {
      num = num * 1.807401811292002;
      break;
    }
    case "BRL": {
      num = num * 4.702103125653066;
      break;
    }
    case "CAD": {
      num = num * 1.2613899271155629;
      break;
    }
    case "CHF": {
      num = num * 0.9431081578416887;
      break;
    }
    case "CNY": {
      num = num * 6.371202047643971;
      break;
    }
    case "CZK": {
      num = num * 22.595197320604605;
      break;
    }
    case "DKK": {
      num = num * 6.878148354320822;
      break;
    }
    case "EUR": {
      num = num * 0.9246947120408198;
      break;
    }
    case "GBP": {
      num = num * 0.765696230389537;
      break;
    }
    case "HKD": {
      num = num * 7.844427512256829;
      break;
    }
    case "HRK": {
      num = num * 6.982101609153738;
      break;
    }
    case "HUF": {
      num = num * 347.72027984960766;
      break;
    }
    case "IDR": {
      num = num * 14366.745525864637;
      break;
    }
    case "ILS": {
      num = num * 3.221102827901369;
      break;
    }
    case "INR": {
      num = num * 76.33158072862246;
      break;
    }
    case "ISK": {
      num = num * 129.89034600226736;
      break;
    }
    case "JPY": {
      num = num * 126.43546463135196;
      break;
    }
    case "KRW": {
      num = num * 1229.090000536323;
      break;
    }
    case "MXN": {
      num = num * 19.9403442453474;
      break;
    }
    case "MYR": {
      num = num * 4.23550309865198;
      break;
    }
    case "NOK": {
      num = num * 8.79850162468861;
      break;
    }
    case "NZD": {
      num = num * 1.4788744246087155;
      break;
    }
    case "PHP": {
      num = num * 52.170487813448396;
      break;
    }
    case "PLN": {
      num = num * 4.282674549997319;
      break;
    }
    case "RON": {
      num = num * 4.569702562698925;
      break;
    }
    case "RUB": {
      num = num * 80.75034814755908;
      break;
    }
    case "SEK": {
      num = num * 9.571900562029446;
      break;
    }
    case "SGD": {
      num = num * 1.3574037531508973;
      break;
    }
    case "THB": {
      num = num * 33.5390276650164;
      break;
    }
    case "TRY": {
      num = num * 14.63603368847775;
      break;
    }
    case "ZAR": {
      num = num * 14.645205735326483;
      break;
    }
    case "USD": {
      num = num * 1;
      break;
    }
    case "AMD": {
      num = num * 471.44025639934983;
      break;
    }
    case "IRR": {
      num = num * 42349.987164312704;
      break;
    }
    case "NGN": {
      num = num * 414.5202480401096;
      break;
    }
    case "SAR": {
      num = num * 3.7498488124145815;
      break;
    }
    case "PKR": {
      num = num * 181.85031781757255;
      break;
    }
  }
  num = numFormatter(num);
  return num;
}

export function numFormatter(num) {
  if (num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 999 && num < 1000000) {
      return (num / 1000).toFixed(2) + "K";
    } else if (num < 900) {
      return num.toFixed(2);
    }
  }
}
