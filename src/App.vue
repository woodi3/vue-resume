<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100vh;
}

body {
  margin: 0;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.row {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between;
}
.col {
  flex: 1;
  max-width: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-12 {
  flex: 100%;
  max-width: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-6 {
  flex: 50%;
  max-width: 50%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-4 {
  flex: 33.33333%;
  max-width: 33.33333%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-3 {
  flex: 25%;
  max-width: 25%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-2 {
  flex: 16.66667%;
  max-width: 16.66667%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.col-1 {
  flex: 8.33333%;
  max-width: 8.33333%;
  padding-left: .5rem;
  padding-right: .5rem;
}
.form-group {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
    cursor: default;
    text-align: left;
    font-weight: bold;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 0;
    font-family: inherit;
}
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}
input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.form-check-label {
  margin-bottom: 0;
}
.form-check-input {
  margin-top: .3rem;
  margin-left: -1.25rem;
}
textarea.form-control {
    height: auto;
}

textarea {
  overflow: auto;
  resize: vertical;
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.icon-button {
  border: none;
  padding-left: .5rem;
  padding-right: .5rem;
  cursor: pointer;
  color: #723881;
}
.icon-button:focus {
  outline: none;
}
.primary-button {
    padding: 1rem;
    background-color: #723881;
    font-weight: bold;
    font-size: .95rem;
    color: white;
    border-color: #723881;
    margin: 1rem;
}
.accordion {
    /* background-color: #eee; */
    /* color: #444; */
    width: 100%;
    outline: none;
}
.panel {
    background-color: white;
    width: 100%;
    padding-bottom: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
}
.collapse {
    display: none;
    transition: 0.4s;
}
.expand {
    display: block;
    transition: 0.4s;
}
.m-0 {
  margin: 0;
}
.mb-0 {
  margin-bottom: 0;
}
.gray-border-bottom {
    border-bottom: #e0e0e0 solid 1px;
}
.gray-border-right {
    border-right: #e0e0e0 solid 1px;
}
.border-0 {
  border: none;
}
</style>
