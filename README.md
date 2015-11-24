# om-next-tutorial
Om next tutorial

[Following along with this tutorial](https://github.com/omcljs/om/wiki/Quick-Start-(om.next)) in hopes of
understanding Om-next architecture.

Learning Om next was inspired by [This awesome talk](https://www.youtube.com/watch?v=MDZpSIngwm4) at `ClojureConj 2015` by [David Nolen](https://github.com/swannodette).

# Requires
[Leiningen](https://github.com/technomancy/leiningen) `2.5.3`

`ClojureScript & Figwheel` require `Java 8` for this tutorial.

```sh
$ brew update
$ brew tap caskroom/cask
$ brew install Caskroom/cask/java
```

I am currently running:
```sh
$ lein -v
Leiningen 2.5.3 on Java 1.8.0_60 Java HotSpot(TM) 64-Bit Server VM
```
# To start the Server
`$ lein run -m clojure.main script/figwheel.clj`
[Visit localhost:3449](http://localhost:3449)