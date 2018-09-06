FORMAT: 1A

# demo-airdrop

demo-airdrop is an API for the NEC2018's demo session. The attendees can use the airdropped tokens to vote or buy goods at the exhibition booths.

## API for checking token supply [/token/supply]

### Show Token's Supply [POST]

`NXT` is the token for voting and `ECO` is the token for buying goods.

+ Request (application/json)

        {
            "user_id": "826af68b-cd44-4a0e-bb6d-165b7f505d90"
        }


+ Response 200 (application/json)

        {
            "NXT": {
                "supply": 1050,
                "remains": 642,
                "collected": false
            },
            "ECO": {
                "supply": 35000,
                "remains": 21400,
                "collected": false
            }
        }

## API for token collection [/token/collect]

### Collect Tokens [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "user_id": "826af68b-cd44-4a0e-bb6d-165b7f505d90"
        }


+ Response 200 (application/json)

        {
            "collected": true
        }


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
