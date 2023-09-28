---
id: 5
name: "Finlandia Foundation"
source: "https://finlandiafoundation.org/"
tags: ["wdes", "wdev", "da"]
---

### Overview

Finlandia Foundation National (FFN) is a non-profit organization that promotes Finnish heritage in the United States by raising funds to provide scholarships and grants, host events, and connect Finnish-Americans with their heritage.

Kath, Director of Communications at FFN and one of my contacts for the [Top of the Lake project](/portfolio/top-of-the-lake), contracted me to transfer content from their old WordPress website to their newly designed website (still WordPress), hosted elsewhere by the company providing the design. Over the course of forty-some hours, I moved over a hundred pages, nearly a thousand paragraphs, and many, many images. Some months later, she reeled me back in to build out the page layouts and SEO, and set up a new digital workspace for the organization.

### Content Transfer

![Map of content transfer](/images/portfolio/finlandia-foundation/content-transfer-map.png)

Despite both websites being built on top of WordPress, transferring the content was anything but simple. The old website was very text- and inline image-heavy, and was formatted with a mixture of out-of-date plugins and the original WP page builder. The new website utilized the WP Team's Gutenberg engine for page building, but Gutenberg is does not play well with dumping a bunch of text and images into its pages.

To deal with this, I had to meticulously copy a few paragraphs at a time, and fetch images individually from the media library to prevent Gutenberg from crashing on me altogether (which happened quite a few times).

Using Figjam (Figma's whiteboarding solution) I mapped all the content from the old site to the new site to keep track of my own progress and aid whoever else would be working on the site. That ended up being me.

### Website Layout

![Finlandia Foundation website front page](/images/portfolio/finlandia-foundation/front-page.jpg)

The company that designed the website, a design team based in Finland, had some contractual misunderstandings with FFN, leaving the site with the content dumped on every page but with no layout. Since the design team wasn't coming back, they had me come in to finish the job.

This wasn't my first foray into using WordPress to generate website layouts, so I was pretty comfortable with diving in to fix up the content. Some pages had quite a bit of work to be done (hello again bad text formatting), and I am proud of the end product.

### Google Workspace

![Google Cloud dashboard](/images/portfolio/finlandia-foundation/google-cloud-dashboard.jpg)

Besides the front-end work, Kath also enlisted me to transfer the FFN workspace infrastructure from Hostgator/CPanel to Google Workspace. They were planning to do this with the guidance the design contractors, but even after they left the project, I convinced FFN to go forward with it anyway to get away from [the mess that is Hostgator, or EIG businesses in general.](https://www.addwp.com/why-people-hate-eig-companies/)

The first thing to do was set up the email services. Starting out, I was under the impression that no emails were previously set up, and overwrote the DNS that directed to emails that were secretly (well, to me) being held in Hostgator. This lead to some email delays and frustration, but no data was lost and the issue was quickly corrected.

The DNS and domain registrar, both in Hostgator were next on the menu. Those transferred to Google Domains without any hinderances.

Finally, I took my first dive into Google Cloud's web services in an effort to keep their platform fully on Google. Learning on the job is one of my favorite parts of this work, but figuring out my way through the maze of endless web services was quite a daunting task.

### Conclusion

It was exciting to work on such a large project with a multi-national organization, and I learned a lot from the process about managing client expectations, project objectives, and utilizing technology that I wouldn't have considered before.

In the end, we got everything launched and running, but not without a few hurdles that brought us to our next project together: changing infrastructure (again 🤦‍♂️) and incorporating the <a href="https://www.finlandia.edu/fahc" target="_blank">Finnish American Heritage Center</a> and <a href="https://bookstore.finlandia.edu" target="_blank">North Wind Bookstore</a> into FFN. (Currently in progress, stay tuned!)
