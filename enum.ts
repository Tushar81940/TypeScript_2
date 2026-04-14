enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move:Direction = Direction.Up;
console.log(move);

enum PaymentStatus{
    pending,
    completed,
    failed
}

function checkStatus(status:PaymentStatus){
    if(status === PaymentStatus.completed){
        console.log("Payment completed successfully");
    }
}