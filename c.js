export default (props) => ({
  async bootstrap(props) {},
  async mount(props) {
    const ppp = props.ownerElement.parentElement;
    const { containerId, autoplayDelay } = props.data;
    if (!containerId) return;
    props.ownerElement.style.display = 'none';
    Object.assign(ppp.style, {
      // width: 'auto',
      zIndex: '1',
    });

    const wrapper = document.getElementById(containerId);
    wrapper.classList.add('swiper-wrapper');
    const s = wrapper.parentElement;
    s.classList.add('swiper');
    Object.assign(wrapper.style, {
      'row-gap': 'initial',
      'column-gap': 'initial',
      'overflow-x': 'initial',
      'overflow-y': 'initial',
    });
    Object.assign(s.style, {
      'overflow-x': 'clip',
    });
    Array.from(wrapper.children).forEach((c) => {
      if (c.nodeType === c.ELEMENT_NODE) {
        c.classList.add('swiper-slide');
      }
    });
    const div = document.createElement('div');
    ppp.appendChild(div);
    div.className = `${containerId}-pagination`;
    Object.assign(div.style, {
      display: 'flex',
      flexDirection: 'row',
    });
    const opt = {
      pagination: {
        enabled: true,
        el: div,
        clickable: true,
        type: 'bullets',
        renderBullet(index, className) {
          return `<span
                                        class="${className}"
                                        style="
                                        --swiper-pagination-bullet-inactive-opacity: 0.2;
                                        width: auto;
                                        flex-grow: 1;
                                        height: 6px;
                                        background-color: white;
                                        border-radius: 4px;"
                                        ></span>`;
        },
      },
    };
    const autoplayDelayValue = Number.isFinite(parseInt(autoplayDelay))
      ? parseInt(autoplayDelay)
      : undefined;
    if (autoplayDelayValue) {
      Object.assign(opt, {
        autoplay: {
          delay: autoplayDelayValue,
        },
        loop: true,
      });
    }
    const swiper = new Swiper(s, opt);
  },
  async update(props) {},
  async unmount(props) {},
  async unload(props) {},
});
