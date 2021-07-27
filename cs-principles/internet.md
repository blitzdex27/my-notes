# The Internet

## Terms

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

## Domain Name

A sequence of phrases that map to a giant Internet-wide database of IP addresses (e.g. www.dexterramos.com). When entered in a browser, the request is sent to something called **DNS**, or Domain Name Server

**Domain name** is broken down into parts:

- **Top-level domain** - the last part (e.g. `.com`) of the domain name managed by the IANA. Some use a two-letter country codes `.co.uk`
- **Host name** - name of collection of servers under the `dexterramos` name. 
    - A domain can have multiple servers under it.
    - It can have a web server, e-mail server, file transfer server, or multiple other web servers.
    - To organize these, a site has a subdomain.
- **Subdomain** - the `www` is the subdomain representing the web server which has a unique IP address associated with it. This may be different with for example my email server `smtp.dexterramos.com` or other servers that are under my domain.

With the use of top-level domain, domain names, and subdomains, we have a way for humans to remember servers throughout the Internet. The DNS perform the name resolution to translate those domains.

## Domain Name Server (DNS)

This server holds a cache of tons of domain names and their matching IP addresses. There isn't just one DNS.

As new domains are created, and as old ones change, those changes are recorded by a DNS, and they spread throughout the Internet

## DNS name resolution

The process of translating a domain name to an IP address.
- Domain name is sent to a DNS
- DNS will send the IP address corressponding the domain name to you
- you use that IP address to connect to site or server

you can skip this by directly inputting the IP address of the site or server



### Routers

The signposts that packets use to travel across the Internet and over private networks within an organizations.

Using the `header` information in data packets, `routers` read the information in the `header` to direct packets to go to the right location.

> At home you have a router that is connected to your home Internet Service Provider.
>
> When your computer sends out a request for information or is sending packets of information to another computer the first place the request goes is the router.
>
> The router looks at the information in the `header` and sees where it needs to send the information.
> 
> In home network, that could be one of two places: 
    >- it could be something that is sent out to the internet to connect to another computer, or 
    >- it could be to another computer or device on your own home network.

## Packets and fault tolerance

A packet consists of about `1 kilobyte` of information. But if you're sending a long email, an audio file, or an image, that would require that the data is broken down into dozens or even hundreds of packets or more.