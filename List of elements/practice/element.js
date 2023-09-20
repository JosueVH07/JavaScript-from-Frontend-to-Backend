const Element = {
    data() {
        return {

        }
    },
    template: `
     <li>
     <span>{{text}}</span>
     &nbsp;&nbsp;&nbsp;
        <button @click="remove()">Remove</button>
        &nbsp;&nbsp;&nbsp;
        <button @click="modify()">Modify</button>

     </li>
    <br />
    `,
    props: ['text', 'index'],
    methods: {
        remove() {
            this.$emit('remove', { i: this.index});
        }
    },
    emits: ['remove']
}

export default Element;