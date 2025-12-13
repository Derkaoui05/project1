// Removed React Router Link import since we're using anchor navigation
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
  useAnimatedMenuContext,
} from '../systaliko-ui/blocks/animated-menu';

const menuItems = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Skills',
    href: '/#skills',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];
const socialLinks = [
  {
    title: 'Github',
    href: 'https://github.com/Derkaoui05/',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/derkaoui-yassir-dev/',
  },
];
// Component to handle menu item clicks and auto-close
function MenuItemLink({ href, className, title, children, isExternal = false }) {
  const { setIsOpen } = useAnimatedMenuContext();

  const handleClick = () => {
    // Close the menu when any link is clicked
    setIsOpen(false);
  };

  return (
    <a
      className={className}
      href={href}
      title={title}
      onClick={handleClick}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {children}
    </a>
  );
}

export function AnimatedMenuDemo() {
  return (
    <div className="fixed top-6 right-6 z-[999]">
      <AnimatedMenu className="relative">
        <AnimatedMenuButton className="w-28 h-12 inline-flex rounded-full justify-center items-center text-primary-foreground">
          <AnimatedMenuButtonToggleIcon className="*:rounded " />
          <AnimatedMenuButtonLabel />
        </AnimatedMenuButton>
        <AnimatedMenuList className="absolute right-0 top-0 bg-linear-to-bl from-primary/95 backdrop-blur-md to-primary border shadow-md inset-shadow-xs inset-shadow-muted rounded-3xl">
          <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
            <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
              {menuItems.map((item, i) => (
                <AnimatedMenuItem key={i} order={i}>
                  <MenuItemLink
                    className="text-2xl font-medium text-muted"
                    href={item.href}
                    title={item.title}
                  >
                    {item.title}
                  </MenuItemLink>
                </AnimatedMenuItem>
              ))}
            </div>
            <div className="flex gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
              {socialLinks.map((item, i) => (
                <AnimatedMenuItem key={item.title} order={i + menuItems.length}>
                  <MenuItemLink
                    className=" font-medium text-muted/80 text-sm tracking-wide uppercase"
                    href={item.href}
                    title={item.title}
                    isExternal={true}
                  >
                    {item.title}
                  </MenuItemLink>
                </AnimatedMenuItem>
              ))}
            </div>
          </div>
        </AnimatedMenuList>
      </AnimatedMenu>
    </div>
  );
}
