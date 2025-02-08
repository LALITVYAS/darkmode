const movies =["KFG","RRR","KRRISH"];
const seats = Array(30).fill(false);

function chooseMovie(){
    console.log("Available Movies");
    movies.forEach((movie ,index) => console.log(`${index+1}.${movie}`));
    const selectedMovieIndex = prompt("Enter the number of the movie you want to watch:") - 1;
    return movies[selectedMovieIndex];
}

function selectSeats() {
    console.log("Available Seats (false means available):");
    console.log(seats);
    const selectedSeats = prompt("Enter seat numbers to book (comma-separated):").split(",");
    selectedSeats.forEach(seat => {
      const seatIndex = parseInt(seat.trim()) - 1;
      if (seats[seatIndex] === false) {
        seats[seatIndex] = true; // Mark seat as booked
      } else {
        console.log(`Seat ${seat} is already booked!`);
      }
    });
    return selectedSeats;
  }


  function makePayment() {
    const paymentAmount = prompt("Enter payment amount:");
    console.log(`Payment of $${paymentAmount} successful!`);
  }
  
  // Function to receive ticket confirmation
  function receiveTicket(movie, selectedSeats) {
    console.log("Ticket Confirmation:");
    console.log(`Movie: ${movie}`);
    console.log(`Seats: ${selectedSeats.join(", ")}`);
    console.log("Show this confirmation at entry.");
  }

  function bookTicket() {
    const movie = chooseMovie();
    const selectedSeats = selectSeats();
    makePayment();
    receiveTicket(movie, selectedSeats);
  }
  
  // Start the booking process
  bookTicket();


  chooseMovie()
  .then((selectSeats)=>{
        return makePayment();
  })
  .then((receiveTicket)=>{
    
  })