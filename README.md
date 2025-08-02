# Cipher Toolkit

An interactive web-based toolkit that allows users to perform classic encryption and decryption with various ciphers, along with other encoding and generation tools.

## Description

This project is a React-based single-page application built to provide a simple and intuitive interface for cryptographic functions. It serves as a hands-on tool for learning about classical ciphers and modern encoding standards. The application was developed using Vite for a fast development experience and is styled with Tailwind CSS via the CDN.

## Features

The toolkit includes a wide range of cryptographic and encoding tools, each implemented as a separate component:

  * **Caesar Cipher**: Shift cipher for encryption and decryption.
  * **Playfair Cipher**: A digraph substitution cipher.
  * **Hill Cipher**: Polygraphic substitution cipher using matrix multiplication.
  * **Vigenère Cipher**: A method of encrypting alphabetic text by using a series of interwoven Caesar ciphers.
  * **ROT13 Cipher**: A simple letter substitution cipher that replaces a letter with the 13th letter after it.
  * **Rail Fence Cipher**: A form of transposition cipher.
  * **Base64 Encoder**: Encodes and decodes data in Base64 format.
  * **Binary Converter**: Converts text to and from binary representation.
  * **Morse Code Translator**: Translates text to and from Morse code.
  * **Hash Generator**: Creates cryptographic hashes of input text.
  * **RSA Key Generator**: Generates public and private key pairs using the RSA algorithm.

## Technologies Used

  * **Frontend**: React.js, Vite
  * **Styling**: Tailwind CSS (via CDN)
  * **Version Control**: Git
  * **Development Environment**: WSL (Ubuntu on Windows)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed. It is highly recommended to use a Linux-based environment or WSL on Windows.

### Installation

1.  Clone the repository from GitHub:
    ```bash
    git clone https://github.com/Jayanth0923/Cipher-Toolkit.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Cipher-Toolkit
    ```
3.  Install the required NPM packages:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) in your browser to view the application.
