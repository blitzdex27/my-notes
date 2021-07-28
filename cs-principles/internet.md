# The Internet

### Terms

**IPv4**

- Internet Protocol 4
- 4.2 Billion addresses
- 32 bits is used to store an address

**IANA**

- Internet Assigned Numbers Authority
- determins what numbers and subsets are assigned to different groups

**IETF**

- Internet Engineering Task Force

**IPvSIX**

- Internet Protocol Six
- Uses 128 bits to store an address
- 30 undecillion address
- 128 binary digits is divided into 8 sections
- Each section sixteen bits and are converted into 4 hexadecimal digits separated with colon `:`
- Sample: `21DA:02AA:00D3:00FF:0000:FE28:2F3B:9C5A`
- `FF02::2` is shorthand for `FF02:0000:0000:0000:0000:0000:0000:0002`

**Dual Stack**

- Both IPv4 and IPvSIX are supported

## Addressing and Routing Information

### Domain Name

A sequence of phrases that map to a giant Internet-wide database of IP addresses (e.g. www.dexterramos.com). When entered in a browser, the request is sent to something called **DNS**, or Domain Name Server

**Domain name** is broken down into parts:

- **Top-level domain** - the last part (e.g. `.com`) of the domain name managed by the IANA. Some use a two-letter country codes `.co.uk`
- **Host name** - name of collection of servers under the `dexterramos` name.
  - A domain can have multiple servers under it.
  - It can have a web server, e-mail server, file transfer server, or multiple other web servers.
  - To organize these, a site has a subdomain.
- **Subdomain** - the `www` is the subdomain representing the web server which has a unique IP address associated with it. This may be different with for example my email server `smtp.dexterramos.com` or other servers that are under my domain.

With the use of top-level domain, domain names, and subdomains, we have a way for humans to remember servers throughout the Internet. The DNS perform the name resolution to translate those domains.

### Domain Name Server (DNS)

This server holds a cache of tons of domain names and their matching IP addresses. There isn't just one DNS.

As new domains are created, and as old ones change, those changes are recorded by a DNS, and they spread throughout the Internet

### DNS name resolution

The process of translating a domain name to an IP address.

- Domain name is sent to a DNS
- DNS will send the IP address corressponding the domain name to you
- you use that IP address to connect to site or server

you can skip this by directly inputting the IP address of the site or server

#### Routers

The signposts that packets use to travel across the Internet and over private networks within an organizations.

Using the `header` information in data packets, `routers` read the information in the `header` to direct packets to go to the right location.

> At home you have a router that is connected to your home Internet Service Provider.
>
> When your computer sends out a request for information or is sending packets of information to another computer the first place the request goes is the router.
>
> The router looks at the information in the `header` and sees where it needs to send the information.
>
> In home network, that could be one of two places:
>
> - it could be something that is sent out to the internet to connect to another computer, or
> - it could be to another computer or device on your own home network.

### Packets and fault tolerance

A packet consists of about `1 kilobyte` of information. But if you're sending a long email, an audio file, or an image, that would require that the data is broken down into dozens or even hundreds of packets or more.

### Transmission Control Protocol (TCP)

TCP uses a process where it looks at all the packets in a message and checks them.

Using the header information in each packet, it knows the following:

- how many there are,
- how large they should be, and
- in which order the packets should be in.

Using this checklist, it is able to rearrange the packets.

- if it finds that a packet doesn't match the expected size or other characteristic, it is discarded. And using the header information again, it will send a request back to the sender for a specific packet to be resent.
- if TCP finds that packets are missing, it goes back to the sender and asks for the missing items to be resent.

After TCP has verified that all packets are accounted for, in the right order, and free of any issues, it certifies the data and the packets are merged together to recreate the original file that was on the sender's device.

For most transmissions in the internet, the TCP method is used. Which is why the IP and TCP protocols are referred to as a single item or TCP/IP

TCP places reliability in a higher priority than speed or latency.

For instances where reliability isn't as important, but speed is, there is another protocol called UDP, or User Datagram Protocol. This protocol doesn't extensive reliability check that TCP performs, but because of this it can send information at a faster rate.

\*Note: File type is not included on the packet header.

## Web Servers

### Identifying a server with URLs

- **URL** - Unified Resource Locator

#### Three main parts of URL

`www.dougwinnie.com`

- `www` - subdomain
- `dougwinnie` - domain
- `com` - top-level domain

### Subdomains

A company or organization usually have single domain name, `www.dougwinnie.com`. Buy you may have multiple subdomains.

- `beta`.dougwinnie.com
- `ftp`.dougwinnie.com
- `dev`.dougwinnie.com

Subdomain functions:

- Link to specific web servers

  e.g. the `www` in `www.dougwinnie.com` points to a specific web server of dougwinnie.com.

  It defines a specific IP address for that server.

  A domain name can have multiple sudomains like dev, prod, or beta. All of which are pointing to different IP addresses.

#### DNS Records

Subdomains can also be very misleading. That's because the information that is stored about them in a DNS may redirect to completely different servers.

In a DNS there are _records_, called **A** records and **CNAME** records. They store rules for how domains are translated to IP addresses.

##### A record (Address record)

A record that holds the IP address of a specific domain.

##### CNAME (Canonical name record)

A record that holds the list of domain name that is requested, and then what URL name that should be redirected to.

> For instance, if we have `dev.example.com - 123.4567.89` on DNS `A record`, and we have defined `test.example.com` to be redirected to `dev.example.com` in `CNAME record` on DNS, then when a user enter `test.example.com` in their browser, they will be redirected to `dev.example.com`.

On same DNS, a CNAME record can be added.

With the use of `A` and `CNAME` records in DNS, IP mappings can be created to resolve URLs to their specific web server IP address.

### HTTP and requests

#### Hypertext Transfer Protocol (HTTP)

When you are working with a web browser, you are sending a web server a request for information. And then you get a response back from the server, with the information your browser needs to display information on the screen.

This communication, back and forth b is called HTTP

HTTP request and communication take place on top of TCP/IP protocol.

You can think of HTTP as a specific language that communicate on the same network as other languages.

A web server needs something that listens to requests. Those requests are in the format of an HTTP request.

**Client request process**

- browser finds the IP address of the server through DNS
- browser sends the HTTP request using packets to the requested IP address

**Server**

- listening to possible requests coming from the internet

**Daemon**

- a special type of program required to listen and respond to requests
- runs on a server and works in the background
- doesn't require any interaction from the user at all
- daemon for most web servers is called the HTTPD program or HTTP daemon

**HTTP Requests**

`GET` - asks the server to return back information in the form of a header, or information that describes a configuration and the body

Process:

- GET request is sent for a particular webpage
- server daemon (HTTPD) hears the request for a specific page like index.html on `www.dougwinnie.com` host.
- when server finds the resource, it then sends information back, called **_response_** using two sections:

  - **header** - contains information about the data that is being sent back:
    - type of server
    - the current date,
    - language, and the
    - response code (defines if get request is successful or not)
  - **body** - contains the content of the document you asked for, which usually is an HTML

`POST` - works in the opposite direction, where instead of getting information from a server, you are sending information for it to use.

### Remembering requests with cookies

Each time you open the browser andopen a web page, it is a unique request.

When you make a new request after you shutdown the browser, the configurations the browser remembered are forgotten.

The time that you're on a site is called a session. A you do things during that session, there are things you can do to configure the site. But when the browser shut down, the session is over and the information is lost.

Cookies enables servers to remember you and your preferences.

#### Three ways that a cookie can be used with a web site

- Determine if a web site visitor is new to the site, or is a returning visitor
- Personalize content or save basic configuration information of a website
- Link items in a database, like a shopping cart, with a unique visitor through an identification code

### Securing requests with SSL and TLS

Whenever you send information over the internet, by default, it is publicly visible.

The Internet and the servers within it can see the information you are sending and receiving from various systems.

If binary is the primary way we communicate on the Internet, we need a way for both ends to be able to scramble and unscramble the original message. In such a way that they can sent it, and if someone accesses it along the way, they can't do anything with scrambled message.

The primary way to do this is through SSL and TLS

#### Secure Sockets Layer (SSL)

SSL is an early version of security that was created by Netscape and is now part of the overall system security of TLS today.

#### Transport Layer Security (TLS)

When you are working with a web browser and are using TLS, you will see a lock icon in the browser window, or you will see https instead of http.

TLS performs a few basic things:

- Handshaking

  > When you shake hands, both hands need to reach out and grasp the other, so the greeting is verified by both sides.
  >
  > - Creates and verifies connection from the client to the server
  > - Creates and verifies connection from the server to the client

- Encryption

  > After handshaking, TLS then encrypts the data that is being sent in both directions.
  >
  > When it encrypts the message, it is still able to preserve the header of the packets that will be used to transport the data since this all still needs to work on the TCP/IP protocol.

- Authentication

  > Authentication is done using a security certificate.
  > A certificate is granted by a known security entity that verifies that the companies, servers, and networks are who they say they are.
  > In that certificate, it defines:
  >
  > - domain name, that is allowed to use the certificate
  > - public key, that is used to encrypt the message
  > - owner
  > - issue date
  > - expiration date
  >
  > Using this information, you're able to trust the certificate and send private information confidently between your computer and a server on the internet.

## Encryption

Data being sent or received that use TCP/IP are exposed in the internet and can be read and intercepted by others.

### Caesar's cypher and keys

Moving characters by number of steps

### Improving security with longer keys

### Symmetric and asymmetric keys

**Symmetric keys** - a security key is sent to the receiver to decrypt the message. this is unsecure as hackers can sniff to this key and crack your message.
**Asymmetric keys** - a security key already exists between the two parties. the sender has the key for sending, and the receipient has a key for receiving for the other party. the sender key is sent together with the message.
