import React, { useEffect, useState, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
  const swiperRef = useRef(null);
  const {
    children,
    virtual,
    ...rest
  } = props;

  const [virtualData, setVirtualData] = useState({
    from: 0,
    to: 0,
    offset: 0,
    slides: [],
  });

  // تحويل children لـ array
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    register();

    const params = {
      ...rest
    };

    if (virtual && childrenArray.length > 0) {
      params.virtual = {
        enabled: true,
        slides: childrenArray,
        renderExternal(vd) {
          setVirtualData(vd);
        },
      };
    }

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  const slides = virtual && virtualData.slides.length > 0
    ? virtualData.slides.map((slide, index) => {
        if (!slide || typeof slide !== 'object') return null;
        
        return React.cloneElement(slide, {
          key: virtualData.from + index,
          style: {
            ...(slide.props?.style || {}),
            [props.direction === "vertical" ? "top" : "left"]:
              `${virtualData.offset}px`,
          },
          ["data-swiper-slide-index"]: virtualData.from + index,
        });
      }).filter(Boolean)
    : childrenArray;

  return (
    <swiper-container init="false" ref={swiperRef}>
      {slides}
    </swiper-container>
  );
}

export function SwiperSlide(props) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}