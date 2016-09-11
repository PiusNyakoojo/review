package mocks

type Counter struct {
	CountCall struct {
		Receives struct {
			PackagePath string
		}
		Returns struct {
			LineCount int
			Error     error
		}
	}
}

func (m *Counter) Count(packagePath string) (int, error) {
	m.CountCall.Receives.PackagePath = packagePath

	return m.CountCall.Returns.LineCount, m.CountCall.Returns.Error
}
