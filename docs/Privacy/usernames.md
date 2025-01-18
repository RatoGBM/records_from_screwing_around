---
title: Random Usernames
---

My notes on creating anonymous usernames.

## Fake Usernames

Privacy and anonymity requires fake usernames.

With clusters of identities, if you accidentally slip up, the clusters will be linked, and your entire anonymity/split identity sheme will be compromised.

Keep all your anonymous accounts under different usernames, and don't reveal any connections unless necessary.

Tools like [sherklock](https://sherlockproject.xyz) exist which can instantly look up similar usernames across all social media platforms. Given enough connected accounts, there are bound to be leaks or public information for further pivoting.

Username requirements:
- easy to memorize
- easy to abbreviate/nickname
- not correlateable with your identity
- fits/sounds well in the community/forum

### Types of Usernames

| Type | Example | Description | Anonymity Notes | Generator Link |
| - | - | - | - | - |
| Real Name | John Doe | User's real name | Use a fake one. | [FakeNameGenerator](https://www.fakenamegenerator.com/) |
| Real Name Handle | @jdoe JohnD | user's real name acronymed, without spaces, and/or lowercase | don't use your real name | |
| Adjective Noun | fat_cat | classic random username | random and should fade in on the site | [Canihazusername](https://canihazusername.vercel.app/) |
| Leading Title | real_fat_cat | "a","the","real", "official", "Mr/s", military title |  |  |
| [Nobility Particle](https://en.wikipedia.org/wiki/Nobiliary_particle) | Cat_de_Buffee | `of`, `von`, `de` from medieval names | | |
| [Suffix](https://en.wikipedia.org/wiki/Suffix_(name)) | fat_cat_jr | family generation number appended at the end | | |
| Tailing Digits | fat_cat15 | tailing digits are added to make usernames unique, when base one is already taken. | Must not relate to you personally. ~~SSN, brithday, etc.~~ | [uuid](https://www.uuidgenerator.net/) |
| Character Name | Sherlock | name of a character/historical figure |  | |
| Acronym | WRT-Guy | Acronym followed by some noun or above category | Should be random just like Adjective-Noun | |
| Number | 8345 | A number. | Must not relate to you personally. ~~SSN, brithday, etc.~~ |  |
| Impersonator | US-President | famous person or organization | Anonymous, but generally rude. | [randomlists.com](https://www.randomlists.com/random-people) |
| Swapped Letters | Sh3r!0ck | Some letters substituted with symbols | Sometimes used for impersonation. | Manual for now [Homoglyphs](../Security/homoglyphs.md) |

#### [Generator](https://perchance.org/84evxjs40l)

There are many other types usernames, and I will probably add them over time.

### Never borrow PII

[PII](https://en.wikipedia.org/wiki/Personal_data) - Personal Identifiable Information.

[Swatting](https://en.wikipedia.org/wiki/Swatting) exists.

**Never ever** use someone else's (or your own) address, name, or photo. If you get targeted by some creep on the internet, an innocent person will be in danger because you impersonated them.

Be cautious with the impersonator category. Don't be rude, and make sure no-one misunderstands you to be the person you to be the person you are impersonating.

### Honorary Mentions, Examples, and Inspirations

Websites unfortunetly don't open source their username generators; however, it is possible to freeload from their APIs or infer generation structure by [scraping and modifying existing usernames.](https://www.blackhatworld.com/seo/scraping-real-usernames-for-dummies-extremely-easy-method.948441/)

The [HAM Radio](https://en.wikipedia.org/wiki/Call_sign) community often uses their call signs as usernames.

Reddit: (the most famous adjective_noun_1234 type username platform.)
- [Scrapped Reddit usernames](https://www.reddit.com/r/hacking/comments/1bqcqi0/3619m_scraped_reddit_usernames/)

Discord:
- [Scrapped Discord usernames](https://github.com/TahaGorme/100k-usernames) (100K)
- [Scrapper Discord usernames](https://github.com/itschasa/Discord-Scraped) (includes 28K avatars)
- Initially used a `#1234` tag for making usersnames unique, before switching to handles.

Twitter:
- [Scrapper Twitter usernames](https://github.com/nyxgeek/twitter-usernames-wordlist) (30M)

[Perchance community](https://perchance.org/welcome):
- I used their tools to create the generators I couldn't find on the internet.
- [Instagram Username Generator](https://perchance.org/instagram-username)

Unix tools:
- `echo $RANDOM` and `uuid`
- `shuf -n 1 wordlist.txt` and `shuf -n 1 -i 1-9999`

Other:
- [Random data from Regex](https://onlinetools.com/random/generate-random-data-from-regexp)

### Fake Real Usernames

Most fake usernames are clearly fake; however, you could pretend to be someone's real account, perhaps to add credibility. [Read more here](https://tmp.bearblog.dev/how-i-stay-reasonably-anonymous-online/)

Scambaiters do fake entire profiles all the time to improvise better victims.

## Fake profile pictures

Pictures and photoes are almost as easy to correlate as usernames.

- [This Person does not exist](https://thispersondoesnotexist.com/)
- [These Cats Do Not Exist](https://thesecatsdonotexist.com/)
- [This Mountain Does Not Exist](https://thismountaindoesnotexist.com/)
- [This X Doesn't Exist](https://thisxdoesnotexist.com/)
- Text-to-Image Generators
Stock images:
- [Wikipedia Commons](https://commons.wikimedia.org/wiki/Main_Page) (conveniently has a "random" button)
- [Getty Images](https://www.gettyimages.com/)
- [Usplash](https://unsplash.com/)
- [Openverse](https://openverse.org/)
Avatars and Identicons:
- [Awesome Identicons](https://github.com/drhus/awesome-identicons) (many are libraries without Web UIs)
- [Ideneticons](https://identicon.net/)
  - [Jdenticons](https://jdenticon.com/) (Don't use PII as input, avatar generators can be reverse engineered.)
- [Gridy Avatars](https://ratogbm.github.io/gridy-avatars/dist/downloadable.html)

## Warning

Don't disclose which generators you use, and don't use the same generator multiple times. It is fairly obvious when 2 profiles are using the same unique username generator.

I am technically blowing myself by writing this, however I am fairly confident in my abilites to blend in in terms with the internet.
