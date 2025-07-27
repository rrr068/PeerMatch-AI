FROM golang:1.24-alpine

RUN apk add --no-cache git curl

RUN go install github.com/cosmtrek/air@v1.40.4

WORKDIR /main

COPY go.mod go.sum ./
RUN go mod download

COPY . .

EXPOSE 8888

CMD ["/go/bin/air"]
