const ppp = document.querySelector('.comp-5912652c-b646-4719-8e45-52d2eabbcdc2');

export default (props) => ({
  async bootstrap(props) {},
  async mount(props) {
    Object.assign(ppp.style, {
      // width: 'auto',
      zIndex: '1'
    })

    let containerId = 'swiper1'

    const wrapper = document.getElementById(containerId);
    wrapper.classList.add("swiper-wrapper");
    const s = wrapper.parentElement;
    s.classList.add("swiper");
    Object.assign(wrapper.style, {
      "row-gap": "initial",
      "column-gap": "initial",
      "overflow-x": "initial",
      "overflow-y": "initial",
    });
    Object.assign(s.style, {
      "overflow-x": "clip"
    });
    Array.from(wrapper.children).forEach(c => {
      if (c.nodeType === c.ELEMENT_NODE) {
        c.classList.add("swiper-slide");
      }
    });
    let div = document.createElement('div');
    ppp.appendChild(div)
    div.className = `${containerId}-pagination`
    Object.assign(div.style, {
      display: 'flex',
      flexDirection: 'row',
    })
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
        }
      }
    }
    Object.assign(opt, {
      autoplay: {
        delay: 5000,
      },
      loop: true,
    })
    swiper = new Swiper(s, opt)

  },
  async update(props) {},
  async unmount(props) {},
  async unload(props) {}
});
