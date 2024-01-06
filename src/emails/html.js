export const htmlCode=(link)=>{
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Confirmation</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, p {
          text-align: center;
        }
        #countdown {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Email Confirmation</h1>
        <div class="container d-flex justify-content-center">
          <img class="w-100"  src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif" alt="cat">
        </div>
        <p>Thank you for signing up! Please confirm your email address by clicking the button below:</p>
        <a class="btn btn-primary btn-block" id="confirmBtn" href=${link}>Confirm</a>
      </div>
    
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
    </body>
    </html>
    `
}