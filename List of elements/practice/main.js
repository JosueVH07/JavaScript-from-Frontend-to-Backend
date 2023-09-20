import Element from './element.js';

const Main = {
    data() {
        return {
            elements: []
        }
    },
    components: {
        Element: Element
    },
    template: `
        <div>
            <button @click='add()'>Add Element</button>
            <ul>
                <Element v-for='(element, i) in elements'
                :key='i' :text='element' 
                :index='i'
                @remove='remove($event)'
                @modify='modify($event)'
                />
            </ul>
        </div>
    `,
    methods: {
        add() {
            var element = 'Element' + (this.elements.length + 1);
            this.elements.push(element);
        },
        remove(params) {
            var index = params.index;
            this.elements.splice(index, 1);
        },
        modify(params) {
            var index = params.i;
            var value = params.value;
            this.elements[index] = value;
        }
    }
}

export default Main;