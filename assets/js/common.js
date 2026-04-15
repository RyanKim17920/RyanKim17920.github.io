$(document).ready(function () {
  const pageLoader = document.getElementById("ryk-loader");
  const configuredLoaderStart = Number(window.__rykLoaderStartedAt);
  const loaderStartedAt = Number.isFinite(configuredLoaderStart) ? configuredLoaderStart : Date.now();
  const configuredMinDuration = Number(window.__rykLoaderMinDuration);
  const minLoaderDuration = Number.isFinite(configuredMinDuration) ? configuredMinDuration : 2200;
  let dismissTimeoutId = null;

  const performDismiss = () => {
    if (!pageLoader || pageLoader.dataset.dismissed === "true") {
      return;
    }

    pageLoader.dataset.dismissed = "true";
    pageLoader.classList.add("is-hidden");
    document.body.classList.remove("has-page-loader");

    window.setTimeout(() => {
      pageLoader.remove();
    }, 450);
  };

  const dismissLoader = (force = false) => {
    if (!pageLoader || pageLoader.dataset.dismissed === "true") {
      return;
    }

    if (dismissTimeoutId !== null) {
      return;
    }

    const elapsed = Date.now() - loaderStartedAt;
    const waitMs = force ? 0 : Math.max(0, minLoaderDuration - elapsed);

    dismissTimeoutId = window.setTimeout(() => {
      dismissTimeoutId = null;
      performDismiss();
    }, waitMs);
  };

  if (pageLoader) {
    if (document.readyState === "complete") {
      window.requestAnimationFrame(() => dismissLoader());
    } else {
      window.addEventListener(
        "load",
        () => {
          window.requestAnimationFrame(() => dismissLoader());
        },
        { once: true },
      );
    }

    window.setTimeout(() => dismissLoader(true), minLoaderDuration + 1400);
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        dismissLoader(true);
      }
    });
  }

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
