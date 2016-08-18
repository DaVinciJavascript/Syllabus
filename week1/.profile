# start folder
cd /git

# default editor
export EDITOR=/usr/bin/nano

# shortcuts
alias home='cd ~'
alias projects='cd ~/projects'

alias gits='git status'
alias ll='ls -FGlAhp'                       # Preferred 'ls' implementation
alias lr='ls -R | grep ":$" | sed -e '\''s/:$//'\'' -e '\''s/[^-][^\/]*\//--/g'\'' -e '\''s/^/   /'\'' -e '\''s/-/|/'\'' | less'

# add default options
alias cp='cp -iv'                           # Preferred 'cp' implementation
alias mv='mv -iv'                           # Preferred 'mv' implementation
alias mkdir='mkdir -pv'                     # Preferred 'mkdir' implementation

# Added by the Heroku Toolbelt
export PATH="/usr/local/heroku/bin:$PATH"
export PATH=$PATH:/Users/bishopzareh/Library/Android/sdk/platform-tools/
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
export PATH=$PATH:/usr/local/Cellar/node/5.5.0/bin

# Custom Prompt
export PS1="\[\033[1;34m\]\!\[\033[0m\] \[\033[1;35m\]\W\[\033[0m\]$ "
