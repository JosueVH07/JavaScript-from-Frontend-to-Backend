const Atributes = {
    data() {
        return {
            count: parseInt(this.start),
            counters: ['Counter 1', 'Counter 2', 'Counter 3', 'Counter 4', 'Counter 5'],
            valueInput: '10'
        }
    },
    template: `{{time()}} &nbsp;&nbsp; 
    <span v-if='count<=20'>The counter is {{count}}</span>
    <span v-else='count<=20'>The counter exceds the value 20 and the value is: {{count}}</span>
    <li v-for='count in counters'>
        <span>{{count}}</span>
    </li>
    <li v-for='(count, index) in counters'>
        <span>Index: {{index}} Counter: {{count}}</span>
    </li>
    &nbsp;&nbsp; Double is: {{countX2}}
    <input type='text' :value='valueInput' /> &nbsp;&nbsp;  valueInput: {{valueInput}}
    <input type='text' v-model='valueInput' /> &nbsp;&nbsp;  valueInput: {{valueInput}}
    
    `,

    created() {
        setInterval(() => {
            this.count += 1
        }, 1000)
    },
    methods: {
        time() {
            var date = new Date()
            var hour = date.getHours()
            var min = date.getMinutes()
            var sec = date.getSeconds()
            if (hour < 10) hour = "0" + hour
            if (min < 10) min = '0' + min
            if (sec < 10) sec = '0' + sec
            return "" + hour + ":" + min + ":" + sec + " "
        },
    },
    computed: {
        countX2() {
            return 2 * this.count
        }
    },
    props: [
        "start"
    ]
}

export default Atributes