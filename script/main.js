$(document).ready(function() {
  $('.buttonA').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(epone) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
  $('.buttonB').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(eptwo) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
  $('.buttonC').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(epthree) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
  $('.buttonD').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(epfour) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
  $('.buttonE').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(epfive) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
  $('.buttonF').on('click', function() {
    $.get("https://swapi.co/api/films/4/", function(epsix) {
      if($('.ul-style').length > 0)  {
            $('.ul-style').remove();
      };
      let peopleList = a;
      let list = document.createElement('ul');
      list.classList.add('ul-style')

      for (let i = 0 ; i < peopleList.length ; i++) {
        let listElement = document.createElement('li');
        listElement.innerHTML = peopleList[i].characters;
        listElement.dataset.url = peopleList[i].url;
        list.appendChild(listElement)
      };
      document.querySelector('.infos').appendChild(list);
    });
  });
})
