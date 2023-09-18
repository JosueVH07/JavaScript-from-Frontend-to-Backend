const Event = {
    data() {
        return {
            count: 0,
            message: '',
            oldValue: 0
        }
    },
    template: `
    count (less than 100): <input type="text" :value="count" @blur="valid($event)" />
    &nbsp;&nbsp; count = {{count}} 
    <br><br>
    <span>{{message}}</span>

    count (less than 100):
    <label>Aqui</label>
    <input type="text" :value="count" @blur="valid($event)" @keydown="verif($event)"/>
      &nbsp;&nbsp; count = {{count}} 
    <br><br>
    <span>{{message}}</span>


    `,
    methods: {
        valid(event) {
            this.message = "";  // reset of the error message before each check
            if (event.target.value < 100) this.count = event.target.value;
            else this.message = "Error: count must be less than 100";
        },
        verify(event) {
            console.log(event.key)
            if (event.key != 'Backspace' && event.key != 'ArrowRight' && event.key != 'Delete' && event.key != 'ArrowLeft' && event.key != 'Tab') {
                if (event.key < "0" || event.key > "9") {
                    event.preventDefault();
                }
            }
        }
    }
}

export default Event;
