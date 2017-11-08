# Learn Crypto

Cryptography is a fascinating topic worthy of
*many* fantastic books! see: http://amzn.to/cthr46

## Password Hashing

> "* **Speed** is exactly what you **don’t want** in a **password hash function***."
~ [Thomas Ptacek](http://amzn.to/cthr46)

Using **bcrypt** means there is a "***work factor***" for
computing the hash of each password.
Each increment in work-factor (beyond 8) roughly *doubles* the amount of time
required to compute the hash.


### bcrypt time required to derive hash

```js
// "cost" | ms required
{
'1' : '27ms',
'2' : '27ms',
'3' : '27ms',
'4' : '27ms',
'5' : '28ms',
'6' : '28ms',
'7' : '28ms',
'8' : '32ms',
'9' : '65ms',
'10': '120ms',
'11': '226ms',
'12': '447ms',  // sweet spot for web apps (page/API response under 1 sec)
'13': '914ms',
'14': '1810ms',
'15': '3673ms',
'16': '7634ms',
'17': '15449ms',
'18': '28531ms',
'19': '51857ms',
'20': '98165ms' // 98 seconds
}
```


### Node.js Modules

+ ***Core*** **Crypto**: http://nodejs.org/api/crypto.html
+ **bcrypt**: https://www.npmjs.com/package/bcrypt
+ ***bcrypt.js**: https://github.com/dcodeIO/bcrypt.js
+ **scrypt**: https://www.npmjs.com/package/scrypt
+ js-scrypt: https://www.npmjs.com/package/js-scrypt
(mostly borrowed from: https://code.google.com/p/javascript-bcrypt/)


## Further Reading

This is a huge and fascinating topic,
don't skip the background (general) reading
if you are serious about understanding security!

### General

+ Basic Principals:
http://www.thegeekstuff.com/2012/07/cryptography-basics/
+ Comprehensive intro:
http://www.ciphersbyritter.com/LEARNING.HTM
+ CS255: Introduction to Cryptography (Stanford Course):
https://crypto.stanford.edu/~dabo/cs255/
+ Cryptography: An Introduction
(3rd Edition *Full Book* PDF):
http://www.cs.umd.edu/~waa/414-F11/IntroToCrypto.pdf

### Passwords

+ How To Safely Store A Password:
http://codahale.com/how-to-safely-store-a-password/
+ Securing Passwords:
http://www.securityfocus.com/blogs/262

### Background Reading

+ Proof of Work:
https://en.wikipedia.org/wiki/Proof-of-work_system
+ Cryptographic hash function
http://en.wikipedia.org/wiki/Cryptographic_hash_function
+ Asymptotic analysis:
http://en.wikipedia.org/wiki/Asymptotic_analysis
+ Bcrypt:
http://en.wikipedia.org/wiki/Bcrypt
+ Blowfish:
http://en.wikipedia.org/wiki/Blowfish_(cipher)
+ Scrypt:
https://en.wikipedia.org/wiki/Scrypt

## Videos

+ The Lazy Programmer's Guide to Secure Computing
http://youtu.be/eL5o4PFuxTY?t=1m3s
