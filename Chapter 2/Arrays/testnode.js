var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
console.log("Array before modification");
console.log("tab =", tab);

// modification of elements, index 2 and 3
tab[2] = "New element 3";
tab[3] = "New element 4";

console.log("Array after modification");
console.log("tab =", tab);

var arr = new Array('e-1', 'e-2', 'e-3')
console.log(arr)
console.log(arr[2])

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach((item) => {
    console.log(item)
})

arr[10] = 'e-10'
arr.forEach((e, i) => {
    console.log(e, i)
    }
)

const mapArr = arr.map((e, i) => {
    if (i > 1) {
        return e
    }
} )

const filter = arr.filter((e, index) => {
    if (index >= 2) {
        return e
    }
})

console.log('the filter', filter)
console.log('the arr', arr)

delete  arr[0]
arr.splice(1,2)
console.log('the arr', mapArr)
arr.forEach((i) => console.log('the item: ', i))

