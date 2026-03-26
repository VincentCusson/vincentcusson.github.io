export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

serve:
	bundle exec jekyll serve --config _config.yml

build:
	bundle exec jekyll build

clean:
	bundle exec jekyll clean
