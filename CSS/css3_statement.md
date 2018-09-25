# 1. Online newspaper design

* Unzip the following file into some folder: [news.zip](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news.zip)
* You should have now 4 files: **index.html** (the main page of an online newspaper), **item.html** (a page representing a single article with comments), **register.html** and **login.html** (pages for users to register and login).
* Analyze the structure of these files.
* As you might have noticed, all pages reference 5 css files: **style.css** (styling the main components), **layout.css** (positioning the main components), **responsive.css** (making the page responsive), **comments.css** (design for the comments section) and **forms.css** (design for the login and register forms).
* Without changing the HTML files, try recreating a design by following these 5 steps:

## 1.1 Main Style

We will start by designing the main components of the main page without worrying about the positioning of any elements (**style.css**). The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-style.html) .

Some helper values:

* Main colors used: #2A2F33, #046DD5 and #F4655F.
* Section colors: #E1493E, #8ABA56, #5B4282, #FF8932,#19B6E9 and #E84C8B.
* Fonts used: Montserrat and Georgia.
* Most paddings and margins are *1em*.

Tip: You may have noticed that the *nav* section contains an *input* and a *label*. These are just to be used in *exercise 1.3* You can start by hiding them using CSS for now.

## 1.2 Positioning

Then we will position the elements in their proper places (**layout.css**). The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-layout.html) .

Some helper values:

* The background color is #EDEFF0.
* The width of the page is *60em*.
* The sidebar occupies 1⁄5 of the total width.

**Tip:** Use a *flexbox* for the menu and a *grid* to position the elements in the page.

##1.3 Responsive Design

We will now make the design responsive by establishing two break points (**responsive.css**):

* When the width of the window reaches **60em**, the sidebar should disappear and the page should occupy the full width (*100%*) of the window. The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-tablet.html) .
* When the width of the window reaches *30em*, the menu should collapse into a pull-down menu, the subtitle should not be shown and each news item title should be moved to above the item image. The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-phone.html) .

Some helper values:

* Characters for the hamburger menu: \2630 (☰) and \2715 (✕).

Tip: Start by making the menu without any animations (using display to hide and show the menu items). After that, try using transitions to change the height of each menu item instead.

## 1.4 Comments Design

Add CSS rules (**comments.css**) to create the design for the comment section that can be seen in the **item.html** page. The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-comments.html) .

Some helper values:

* Quote character for each comment: \201C (“).

## 1.5 Forms Design

Add CSS rules (**forms.css**) to create the design for the register and login forms that can be seen in the **register.html** and **login.html** pages. The final result should be [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-register.html) .

Make sure that in smaller screens, the form fills the content area like [this](https://www.fe.up.pt/~arestivo/page/files/exercises/css/news-register-small.html) .

# 2. No flexbox/grid design

**Without** using the *flexbox* and *grid* CSS layouts, try to recreate some designs.

* Copy the following HTML code: [news.html](https://web.fe.up.pt/~arestivo/page/exercises/css/news) into a new .html file.
* Open it and observe its structure.
* As you might have noticed, this document references a, not yet created, file named style.css as its style sheet. Create that file and modify it so that the page appearance becomes as similar to the following designs as possible: [style 1](https://www.fe.up.pt/~arestivo/page/files/exercises/css/style1.html) , [style 2](https://www.fe.up.pt/~arestivo/page/files/exercises/css/style2.html) and [style 3](https://www.fe.up.pt/~arestivo/page/files/exercises/css/style3.html)
* **Style 2** uses the following image: ![image for style 2](https://web.fe.up.pt/~arestivo/page/img/exercises/css/stripe.png)

**Extra:** Now try the same exercises, this time using flexbox and grid layouts.

# 3. Blocks

* Unzip the following file into some folder: [blocks.zip](https://www.fe.up.pt/~arestivo/page/files/exercises/css/blocks.zip)
* Inside a file called style.css, try recreating each one of the four following designs using flexbox and grid layouts:

## 3.1

![3.1 img](https://web.fe.up.pt/~arestivo/page/img/exercises/css/block1.png)

**Tips:**

* Use a flexbox layout for this one.
* Orange block uses the remaining space.

## 3.2

![3.2 img](https://web.fe.up.pt/~arestivo/page/img/exercises/css/block2.png)

## 3.3

![3.3 img](https://web.fe.up.pt/~arestivo/page/img/exercises/css/block3.png)

**Tips:**

* First item in yellow block is three times the size of the others.
* Items in red block are reversed.
* Left column has 1⁄4 of the total width.

## 3.4

![3.4 img](https://web.fe.up.pt/~arestivo/page/img/exercises/css/block4.png)

**Tips:**

* Green and orange blocks have half the height of the red and yellow ones.

Solutions

Solutions for these CSS exercises.