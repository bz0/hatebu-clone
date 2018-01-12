import { hatebuHotEntry } from "./hatebuHotEntry"
import Vue from 'vue';
import Component from 'vue-class-component';
 
@Component
export default class App extends Vue {
  bookmark: any;
  data() {
    return {
      bookmark: []
    };
  }
 
  async created () {
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.all();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async all(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.all();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async it(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.it();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async life(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.life();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async knowledge(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.knowledge();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async fun(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.fun();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async entertainment(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.entertainment();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async game(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.game();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async economics(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.economics();
    this.bookmark = json['rdf:RDF']['item'];
  }

  async social(){
    const hatebu = new hatebuHotEntry();
    const json = await hatebu.social();
    this.bookmark = json['rdf:RDF']['item'];
  }
}

const vm = new App({ el: '#app' });