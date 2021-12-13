import { useTheme } from 'next-themes';

const style = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  padding: '0 0.25rem',
  textTransform: 'uppercase',
  fontSize: '0.75rem',
  borderRadius: '0.125rem',
  fontWeight: 'bold',
  color: 'white'
}

const styleLight = Object.assign({}, style,{
  backgroundColor: '#3182ce'
});

const styleDark = Object.assign({}, style, {
  backgroundColor: 'rgba(49, 130, 206, 0.6)'
});

const OptionalBadge = () => {
  const { theme } = useTheme();
  return <span style={theme === 'light' ? styleLight : styleDark}>Optional</span>;
};

export default OptionalBadge;