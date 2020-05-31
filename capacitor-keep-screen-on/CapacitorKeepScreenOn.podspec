
  Pod::Spec.new do |s|
    s.name = 'CapacitorKeepScreenOn'
    s.version = '0.0.1'
    s.summary = '屏幕常亮'
    s.license = 'MIT'
    s.homepage = 'git@github.com:gaoyuanfell/CapacitorKeepScreenOn.git'
    s.author = 'gaoyuan'
    s.source = { :git => 'git@github.com:gaoyuanfell/CapacitorKeepScreenOn.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end