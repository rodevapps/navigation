<script type="ts">
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Nav from '../components/Nav.svelte'
</script>

<html lang="en">
  <Header />

  <body>
    <Nav />

    <main>
      <slot />
    </main>

    <Footer />
  </body>
</html>