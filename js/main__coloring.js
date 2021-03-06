time.log('coloring start');

color = {
  "length": 19,
  "material_50": [
    "#FFEBEE", "#FCE4EC", "#F3E5F5", "#EDE7F6", "#E8EAF6",
    "#E3F2FD", "#E1F5FE", "#E0F7FA", "#E0F2F1", "#E8F5E9",
    "#F1F8E9", "#F9FBE7", "#FFFDE7", "#FFF8E1", "#FFF3E0",
    "#FBE9E7", "#EFEBE9", "#FAFAFA", "#EFEBE9"
  ],
  "material_100": [
    "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9",
    "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9",
    "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2",
    "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC"
  ],
  "material_300": [
    "#E57373", "#F06292", "#BA68C8", "#9575CD", "#7986CB",
    "#64B5F6", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784",
    "#AED581", "#DCE775", "#FFF176", "#FFD54F", "#FFB74D",
    "#FF8A65", "#A1887F", "#E0E0E0", "#90A4AE"
  ],
  "material_500": [
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
    "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
    "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
    "#FF5722", "#795548", "#9E9E9E", "#607D8B"
  ],
  "material_600": [
    "#E53935", "#D81B60", "#8E24AA", "#5E35B1", "#3949AB",
    "#1E88E5", "#039BE5", "#00ACC1", "#00897B", "#43A047",
    "#7CB342", "#C0CA33", "#FDD835", "#FFB300", "#FB8C00",
    "#F4511E", "#6D4C41", "#757575", "#546E7A"
  ],
  "material_700": [
    "#D32F2F", "#C2185B", "#7B1FA2", "#512DA8", "#303F9F",
    "#1976D2", "#0288D1", "#0097A7", "#00796B", "#388E3C",
    "#689F38", "#AFB42B", "#FBC02D", "#FFA000", "#F57C00",
    "#E64A19", "#5D4037", "#616161", "#455A64"
  ],
  "material_800": [
    "#C62828", "#AD1457", "#6A1B9A", "#4527A0", "#283593",
    "#1565C0", "#0277BD", "#00838F", "#00695C", "#2E7D32",
    "#558B2F", "#9E9D24", "#F9A825", "#FF8F00", "#EF6C00",
    "#D84315", "#4E342E", "#424242", "#37474F"
  ],
  "material_900": [
    "#B71C1C", "#880E4F", "#4A148C", "#311B92", "#1A237E",
    "#0D47A1", "#01579B", "#006064", "#004D40", "#1B5E20",
    "#33691E", "#827717", "#F57F17", "#FF6F00", "#E65100",
    "#BF360C", "#3E2723", "#212121", "#263238"
  ],
  "material_a100": [
    "#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF",
    "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA",
    "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180",
    "#FF9E80", "#D7CCC8", "#F5F5F5", "#CFD8DC"
  ],
  "name": [
    "Red", "Pink", "Purple", "Deep Purple", "Indigo",
    "Blue", "Light Blue", "Cyan", "Teal", "Green",
    "Light Green", "Lime", "Yellow", "Amber", "Orange",
    "Deep Orange", "Brown", "Grey", "Blue Grey"
  ]
}

function dice(n, s, b) {
  var out = 0;
  for (i = 0; i < n; i++) {
    out += Math.ceil(Math.random() * s);
  }
  return out + b;
}

if (localStorage.theme_color == "true") {
  if (!localStorage.theme_color__i)
    color.i = localStorage.theme_color__i;
  else
    color.i = 0;
} else {
  color.i = dice(1, color.length, -1);
}

if (color.i == 12 /*yellow*/ ) {
  color.material_500 = color.material_600;
}
if (color.i == 17 /* grey */ ) {
  color.i = 5;
}
console.log("COLOR CODE: " + color.name[color.i]);

function coloring() {
  $("header, .dashboard").css({
    "background": color.material_700[color.i]
  });
  $("#sub_header .filter_bt, #column_bt").hover(function() {
    $(this).css({
      "background": color.material_700[color.i]
    });
  }, function() {
    $(this).css({
      "background": color.material_500[color.i]
    });
  })
  $("#sub_header > #line1").css({
    "background": color.material_500[color.i]
  });
  $("dl .material-icons, a:not(nav a), #to_github, #to_github > i").css({
    "color": color.material_500[color.i],
    "fill": color.material_500[color.i]
  })

  $("link[rel~='icon']").attr("href", "img/[favicon]/favicon" + color.i + ".ico");
  $("meta[name='theme-color']").attr("content", color.material_700[color.i]);
}
time.log('coloring done');

// coloring();

// $(document).ready(function() {
//   coloring();
// });
