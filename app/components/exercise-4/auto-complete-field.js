import Ember from 'ember';

export default Ember.Component.extend({
  searchString: null,
  currentFocus: -1,
  selectedString: null,
  countrySelect: [],
  // filteredList: Ember.computed('searchString', function(){
  //   let searchString = this.get('searchString');
  //   console.log("ss");
  //   let searchedList = [];
  //   if(!Ember.isBlank(searchString)) {
  //     searchedList = this.list.filter(function(item) {
  //       return item.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
  //     });
  //   }
  //
  //   return searchedList;
  // }),

  // updateCountrySelect: function() {
  //   console.log("this.filteredList = ", this.filteredList)
  //   this.set('countrySelect', this.filteredList);
  // }.observes('filteredList').on('init'),
  removeActive(dom) {
    //remove the "active" class from all autocomplete items
    for (var i = 0; i < dom.length; i++) {
      dom[i].classList.remove("autocomplete-active");
    }
  },

  doSelect(selectedVal) {
    this.set('searchString', selectedVal);
    this.set('countrySelect', []);
    this.set('currentFocus', -1);
    this.set('selectedString', this.searchString);
  },

  doEventOPeration(keyCode) {
    let dom = this.$('.autocomplete-items');

    //enter key event
    if(keyCode === 13) {
      event.preventDefault();
      if(this.currentFocus > -1) {
        console.log(dom[this.currentFocus].getAttribute('data-select'));
        this.doSelect(dom[this.currentFocus].getAttribute('data-select'));
      }

      return;
    }

    //down arrow key event
    if(keyCode === 40) {
      this.currentFocus++;
    }

    //up key arrow event
    if(keyCode === 38) {
      this.currentFocus--;
    }


    this.removeActive(dom);

    if (this.currentFocus >= dom.length){
      this.currentFocus = 0;
    }

    if (this.currentFocus < 0) {
       this.currentFocus = (dom.length - 1);
    }

    //Add active when up/down key event is firing
    dom[this.currentFocus].classList.add("autocomplete-active");
  },

  actions: {
    selectValue: function(selectedVal) {
      this.doSelect(selectedVal);
    },

    keyup() {
      let keyCode = event.keyCode;
      if(keyCode === 40 || keyCode === 38 || keyCode === 13) {
        this.doEventOPeration(keyCode);
        return;
      }

      let searchString = this.searchString;

      if (!Ember.isBlank(searchString)) {
        let searchedList = this.list.filter(function(item) {
          return item.toLowerCase().substring(0, searchString.length) === searchString.toLowerCase();
        });

        this.set('countrySelect', searchedList);
      } else {
        this.set('countrySelect', []);
      }
    },

    summa(){
      console.log("summa");
    }
  }
});
