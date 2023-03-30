// Google Maps JavaScript APIを初期化
function initMap() {
  // スプレッドシートから緯度経度リストを読み込み
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1sYO36hOE4KZ7gY1JwUfbUgz26SSnclmF2Ox1Ys5BXis/edit#gid=0"; // スプレッドシートのURLを指定
  var latLngList = getLatLngListFromSpreadsheet(spreadsheetUrl);

  // 地図を表示
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 35.681236, lng: 139.767125 }, // 東京駅の座標
  });

  // マーカーを表示
  for (var i = 0; i < latLngList.length; i++) {
    var latLng = latLngList[i];
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
    addClickListenerToMarker(marker, i+2);
  }
}

// スプレッドシートから緯度経度リストを取得
function getLatLngListFromSpreadsheet(spreadsheetUrl) {
  var latLngList = [];
  $.ajax({
    type: "GET",
    url: spreadsheetUrl.replace("/edit", "") + "/gviz/tq?tqx=out:csv",
    async: false,
    success: function(text) {
      var rows = text.split("\n");
      for (var i = 1; i < rows.length; i++) {
        var row = rows[i].split(",");
        if (row.length < 2) continue;
        var latLng = { lat: parseFloat(row[0]), lng: parseFloat(row[1]) };
        latLngList.push(latLng);
      }
    },
  });
  return latLngList;
}

// マーカーにクリックイベントを追加
function addClickListenerToMarker(marker, rowIndex) {
  marker.addListener("click", function() {
    var flagCell = "A" + rowIndex; // フラグの入力セルを指定
    var flagValue = sheet.getRange(flagCell).getValue() == "0" ? "1" : "0"; // フラグを反転させる
    var updateUrl = "https://script.google.com/macros/s/1sYO36hOE4KZ7gY1JwUfbUgz26SSnclmF2Ox1Ys5BXis/exec"; // Google Apps ScriptのURLを指定
    $.ajax({
      type: "POST",
      url: updateUrl,
      data: {flagCell: flagCell, flagValue: flagValue}
    });
  });
}
