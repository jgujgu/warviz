---
layout: post
title:  "The Vim autocomplete trifecta"
cover: cover.jpg
date:   2015-08-03 12:24:38
categories: vim autocomplete neocomplete ultisnips vimsnippets snippets productivity
---
Setting up any text editor with snippets is a must for every developer, and, for those that use Vim, the case is no different. My minimum setup in Vim requires [neocomplete](https://github.com/Shougo/neocomplete.vim), [Ultisnips](https://github.com/SirVer/ultisnips), and [vim-snippets](https://github.com/honza/vim-snippets).

Add these lines to your `.vimrc`. I use Vundle.

{% highlight vim %}
"Vundle begin"
Plugin 'Shougo/neocomplete.vim'
Plugin 'SirVer/ultisnips'
Plugin 'honza/vim-snippets'
"Vundle end"

"neocomplete settings
let g:neocomplete#enable_at_startup = 1
set wildmode=list:longest
set wildignore=*.o,*.obj,*~
set wildignore+=*vim/backups*
set wildignore+=*sass-cache*
set wildignore+=*DS_Store*
set wildignore+=*.gem
set wildignore+=log/**
set wildignore+=node_modules/**
set wildignore+=tmp/**
" Use smartcase.
let g:neocomplete#enable_smart_case = 1
" Set minimum syntax keyword length.
let g:neocomplete#sources#syntax#min_keyword_length = 3
let g:neocomplete#lock_buffer_name_pattern = '\*ku\*'

"Ultisnips settings
let g:UltiSnipsExpandTrigger="<TAB>"
let g:UltiSnipsListSnippets="<c-TAB>"
let g:UltiSnipsJumpForwardTrigger="<c-j>"
let g:UltiSnipsJumpBackwardTrigger="<c-k>"
{% endhighlight %}

Next, on OSX, since it comes with Vim 7.3, you will have to upgrade to Vim 7.4 with lua (because of neocomplete). First, move the system Vim to another folder:
{% highlight js %}
❯❯❯ mv /usr/bin/vim /usr/bin/vim73
{% endhighlight %}

Now, install the new vim:
{% highlight js %}
❯❯❯ brew install vim --with-lua
{% endhighlight %}

Finally, since homebrew will probably have not installed Vim into old `usr/bin` directory, copy the homebrew vim into the `usr/bin` directory:
{% highlight js %}
❯❯❯ cp usr/local/Cellar/vim/7.4.xxx/bin/vim usr/bin
{% endhighlight %}

All of this sets up the minimum settings to use neocomplete and Ultisnips in concert. `CTRL-n` cycles through neocomplete options and `TAB` expands them. `CTRL-j` and `CTRL-k` will cycle through the fields of an Ultisnips snippet, requiring `TAB`, of course, to first expand it. These are the only commands I commonly use.

As an example, in any JavaScript file, I will only type `fun` + `TAB` (while in insert mode) and end up with the following expansion:

{% highlight js %}
function function_name(argument) {
    body;
}
{% endhighlight %}

Using `CTRL-j`, I will jump from `function_name`, `argument`, and finally the blank `body`, foregoing the need to type any parentheses, braces, or tabs.

It is here I'd like to address the concern of typing not being the bottleneck for writing code. **I totally agree it is not the bottleneck.** It addresses another problem. Snippets significantly reduce the annoyance of having to type out syntax, which interrupts my thinking, especially if I have to sift through a mess of incorrectly completed braces and parentheses (which I generally don't have to do anymore). A streamlined snippet setup prevents that wasted time, such that more time can be spent on the more interesting parts of programming.

Finally, vim-snippets provides many great default snippets, but let's say you want to make new snippets or just see which ones come default. Go into the following directory to see the different snippet files in your favorite languages:
{% highlight js %}
❯❯❯ cd ~/.vim/bundle/vim-snippets/UltiSnips
{% endhighlight %}

I often use RSpec expectation syntax in testing, but loathe writing out the syntax itself. In my `ruby.snippets` file, I have added the following:
{% highlight sh %}
snippet ex "expectation"
expect(${1:object}).${2:to} ${3:method}(${4:expectation})
endsnippet
{% endhighlight %}

This snippet allows me to simply type `ex + TAB` and `CTRL-j` through the following:
{% highlight ruby %}
expect(object).to method(expectation)
{% endhighlight %}
As unproblematic as Ruby syntax is, this still saves me the hassle of typing out syntax I do not care about.

Turning Vim into the environment you want and work well in takes time, and I think these three tools have really made development for me faster and less stressful. Whether you type fast or slow, use Vim or not, snippets should be a cornerstone of your editor.
