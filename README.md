# Vue 3 Web Component Research

探討 vite + vue3 打包成 web component 的方式，以及會遇到的樣式問題  
分為五個題目討論：

## example 1 web component

介紹如何將 Vue 元件打包成 web component，並觀察 shadow dom

## example 2 styling

介紹如何在 web component 中使用 style，介紹兩種使用樣式的方式（inline style、shadow root style）。以及一個錯誤示範（全域 style）

## example 3 nested component

介紹如何在 web component 中使用巢狀元件，以及巢狀元件的樣式問題

## example 4 slot

介紹如何在 web component 中使用 slot 元件，以及 slot 元件的樣式特性

## example 5 exporting legacy component

如果一個元件同時要支援 Vue component 和 web component，該如何處理
