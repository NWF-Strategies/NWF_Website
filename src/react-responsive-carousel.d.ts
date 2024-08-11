declare module 'react-responsive-carousel/lib/js/components/Carousel/index' {
    import React from 'react';
  
    interface CarouselProps {
      // Basic props
    children?: React.ReactNode;
    className?: string;
    width?: string | number;
    
    // Display and behavior props
    showArrows?: boolean;
    showStatus?: boolean;
    showIndicators?: boolean;
    showThumbs?: boolean;
    infiniteLoop?: boolean;
    centerMode?: boolean;
    centerSlidePercentage?: number;
    axis?: 'horizontal' | 'vertical';
    verticalSwipe?: 'natural' | 'standard';
    
    // Interaction props
    swipeable?: boolean;
    emulateTouch?: boolean;
    useKeyboardArrows?: boolean;
    stopOnHover?: boolean;
    preventMovementUntilSwipeScrollTolerance?: boolean;
    dynamicHeight?: boolean;
    
    // Animation and transition props
    animationHandler?: 'fade' | 'slide' | AnimationHandler;
    swipeAnimationHandler?: SwipeAnimationHandler;
    stopSwipingHandler?: StopSwipingHandler;
    transitionTime?: number;
    swipeScrollTolerance?: number;
    
    // Auto play props
    autoPlay?: boolean;
    interval?: number;
    autoFocus?: boolean;
    
    // Customization props
    selectedItem?: number;
    thumbWidth?: number;
    labels?: {
      leftArrow?: string;
      rightArrow?: string;
      item?: string;
    };
    statusFormatter?: (current: number, total: number) => string;
    
    // Render props
    renderArrowPrev?: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
    renderArrowNext?: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;
    renderIndicator?: (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number, label: string) => React.ReactNode;
    renderItem?: (item: React.ReactNode, options?: { isSelected: boolean }) => React.ReactNode;
    renderThumbs?: (children: React.ReactChild[]) => React.ReactChild[];
    
    // Event handler props
    onChange?: (index: number, item: React.ReactNode) => void;
    onClickItem?: (index: number, item: React.ReactNode) => void;
    onClickThumb?: (index: number, item: React.ReactNode) => void;
    onSwipeStart?: (event: React.TouchEvent) => void;
    onSwipeEnd?: (event: React.TouchEvent) => void;
    onSwipeMove?: (event: React.TouchEvent) => boolean;
    
    // Accessibility prop
    ariaLabel?: string;

    //add any other props needed please
    }
  
    const Carousel: React.ComponentClass<CarouselProps>;
  
    export = Carousel;
  }